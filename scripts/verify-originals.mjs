import fs from 'node:fs';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { unzipSync } from 'fflate';
import sharp from 'sharp';

const archive = unzipSync(new Uint8Array(fs.readFileSync('design/portfolio.fig')));
const sources = JSON.parse(fs.readFileSync('design/media-sources.json', 'utf8'));
const files = [];
function verify(entry, destination) {
  const original = Buffer.from(archive[entry] || []);
  assert(original.length > 0, `Source missing: ${entry}`);
  const local = fs.readFileSync(destination);
  assert(original.equals(local), `Original bytes differ: ${destination}`);
  files.push({ source: entry, local: destination, bytes: local.length, sha256: createHash('sha256').update(local).digest('hex') });
}
for (const entry of Object.keys(archive).filter(n => /^images\/[a-f0-9]+$/.test(n))) {
  const hash = entry.split('/').pop();
  const name = fs.readdirSync('design/original-assets').find(n => n.startsWith(hash + '.'));
  assert(name, `Image missing: ${hash}`);
  verify(entry, 'design/original-assets/' + name);
}
for (const source of sources) verify('videos/' + source.videoHash, `public/media/${source.slot}.mp4`);
for (const entry of Object.keys(archive).filter(n => /^audios\/[a-f0-9]+$/.test(n))) verify(entry, `design/original-assets/audio-${entry.split('/').pop()}.mp3`);
const gifs = [];
for (const [slot, hash] of [['consumer-reflection', '482ab6657515261d05d852ad3f8b35f8a7b0ec2a'], ['zuzu-reflection', 'bef93d62e63dfc1bd9f590a4e21bdb8de7dc0bd0']]) {
  verify('images/' + hash, `public/media/${slot}.gif`);
  const info = await sharp(`public/media/${slot}.gif`, { animated: true }).metadata();
  assert(info.pages > 1, `Animation missing: ${slot}`);
  gifs.push({ slot, frames: info.pages, width: info.width, height: info.pageHeight });
}
fs.writeFileSync('outputs/verification/source-integrity.json', JSON.stringify({ source: 'design/portfolio.fig', verified: files.length, images: 69, videos: sources.length, gifs, files }, null, 2));
console.log(`Original bytes verified: 69 images, ${sources.length} videos, source audio, and both animated GIFs.`);
