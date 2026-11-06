type Point = { x: number; y: number };
type Tile = Point & { start: number; driftX: number; driftY: number };

const framesPerPhase = 36;
const dissolveTime = 1020;
const assembleTime = 1320;
const overlapTime = 135;
const tileDissolve = .24;
const tint = 'sepia(.55) hue-rotate(68deg) saturate(1.5)';

function pixelFrames(width: number, height: number, origin: Point, incoming: boolean): Keyframe[] {
  const size = Math.max(22, Math.ceil(Math.max(width, height) / 35));
  const radius = Math.hypot(Math.max(origin.x, width - origin.x), Math.max(origin.y, height - origin.y));
  const tiles: Tile[] = [];

  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      const column = x / size;
      const row = y / size;
      const noise = ((column * 137 + row * 173 + column * row * 89) % 97) / 97;
      const dx = x + size / 2 - origin.x;
      const dy = y + size / 2 - origin.y;
      const edgeX = Math.max(x - origin.x, origin.x - x - size, 0);
      const edgeY = Math.max(y - origin.y, origin.y - y - size, 0);
      const fromOrigin = Math.hypot(edgeX, edgeY) / radius;
      const drift = size * (.25 + noise * .55) / Math.max(size, Math.hypot(dx, dy));

      tiles.push({
        x,
        y,
        start: fromOrigin * (1 - tileDissolve),
        driftX: dx * drift,
        driftY: dy * drift,
      });
    }
  }

  return Array.from({ length: framesPerPhase + 1 }, (_, frame) => {
    const offset = frame / framesPerPhase;
    const progress = incoming ? 1 - offset : offset;
    const fragments = [];

    for (const tile of tiles) {
      const change = (progress - tile.start) / tileDissolve;
      if (change >= 1) continue;

      // Leave the page intact ahead of the wave, then shrink each tile as it drifts outward.
      const breaking = Math.max(0, change);
      const inset = Math.round(breaking * size * .39);
      const left = tile.x + inset + Math.round(breaking * tile.driftX);
      const top = tile.y + inset + Math.round(breaking * tile.driftY);
      const extent = size - 2 * inset;
      fragments.push(`M${left} ${top}h${extent}v${extent}h-${extent}Z`);
    }

    return {
      offset,
      easing: 'steps(1, end)',
      clipPath: `path("${fragments.join('') || 'M0 0Z'}")`,
      filter: incoming && progress > .2 ? tint : 'none',
    };
  });
}

export async function matrixTransition(update: () => void, origin: Point) {
  const root = document.documentElement;
  const outgoing = pixelFrames(innerWidth, innerHeight, origin, false);
  const incoming = pixelFrames(innerWidth, innerHeight, origin, true);
  const animations: Animation[] = [];
  root.setAttribute('data-matrix-transition', '');

  try {
    const transition = document.startViewTransition(update);
    try {
      await transition.ready;
      animations.push(root.animate(outgoing, {
        duration: dissolveTime,
        fill: 'both',
        pseudoElement: '::view-transition-old(root)',
      }));
      animations.push(root.animate(incoming, {
        delay: dissolveTime - overlapTime,
        duration: assembleTime,
        fill: 'both',
        pseudoElement: '::view-transition-new(root)',
      }));
    } catch {
      transition.skipTransition();
    }
    await transition.finished;
  } finally {
    animations.forEach((animation) => animation.cancel());
    root.removeAttribute('data-matrix-transition');
  }
}
