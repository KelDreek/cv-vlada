type Point = { x: number; y: number };
type Tile = Point & { start: number; lift: number };

const framesPerPhase = 15;
const dissolveTime = 340;
const assembleTime = 440;
const tint = 'sepia(.55) hue-rotate(68deg) saturate(1.5)';

function pixelFrames(width: number, height: number, origin: Point, incoming: boolean): Keyframe[] {
  const size = Math.max(22, Math.ceil(Math.max(width, height) / 35));
  const distance = Math.hypot(width, height);
  const tiles: Tile[] = [];

  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      const column = x / size;
      const row = y / size;
      const noise = ((column * 137 + row * 173 + column * row * 89) % 97) / 97;
      const fromOrigin = Math.hypot(x + size / 2 - origin.x, y + size / 2 - origin.y) / distance;

      tiles.push({
        x,
        y,
        start: fromOrigin * .55 + noise * .27,
        lift: Math.round(size * (.25 + noise * .65)),
      });
    }
  }

  return Array.from({ length: framesPerPhase + 1 }, (_, frame) => {
    const offset = frame / framesPerPhase;
    const progress = incoming ? 1 - offset : offset;
    const fragments = [];

    for (const tile of tiles) {
      const change = (progress - tile.start) / .19;
      if (change >= 1) continue;

      // Keep full tiles flush until the wave reaches them, then lift and shrink each fragment.
      const breaking = Math.max(0, change);
      const inset = Math.round(breaking * size * .39);
      const left = tile.x + inset;
      const top = tile.y + inset - Math.round(breaking * tile.lift);
      const extent = size - 2 * inset;
      fragments.push(`M${left} ${top}h${extent}v${extent}h-${extent}Z`);
    }

    return {
      offset,
      easing: 'steps(1, end)',
      clipPath: `path("${fragments.join('') || 'M0 0Z'}")`,
      filter: progress > .2 ? tint : 'none',
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
        delay: dissolveTime - 45,
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
