export const SHAPE_COUNT = 5;
export const CYCLE_MS = 9600;
export const SCATTER_START_MS = 6500;

export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
export const smoothstep = value => {
  const t = clamp(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

export function sampleCycle(elapsed) {
  const cycle = Math.floor(Math.max(0, elapsed) / CYCLE_MS);
  const time = Math.max(0, elapsed) % CYCLE_MS;
  const scatter = time < 2900
    ? 1 - smoothstep((time - 350) / 2550)
    : smoothstep((time - SCATTER_START_MS) / 2300);
  return { shape: cycle % SHAPE_COUNT, scatter };
}

export function seed(index, salt = 1) {
  const n = Math.sin((index + 1) * 127.1 + salt * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

export function shapePoint(index, count, shape) {
  const u = (index + .5) / count;
  const a = index * 2.3999632297;
  const y = 1 - 2 * u;
  if (shape === 1) {
    const t = u * Math.PI * 2;
    const ring = .72 + .25 * Math.cos(a);
    return [ring * Math.cos(t), ring * Math.sin(t), .25 * Math.sin(a)];
  }
  if (shape === 2) {
    const t = u * Math.PI * 6 + (index % 2) * Math.PI;
    const ring = .58 + .075 * Math.cos(a);
    return [Math.cos(t) * ring, y * .95 + .075 * Math.sin(a), Math.sin(t) * ring];
  }
  if (shape === 3) {
    const face = index % 6;
    const p = (seed(index, 2) * 2 - 1) * .7;
    const q = (seed(index, 3) * 2 - 1) * .7;
    return face < 2 ? [face ? .7 : -.7, p, q]
      : face < 4 ? [p, face === 3 ? .7 : -.7, q]
        : [p, q, face === 5 ? .7 : -.7];
  }
  if (shape === 4) {
    const t = u * Math.PI * 2;
    const ring = (2 + .5 * Math.cos(t * 3)) / 2.6 + .045 * Math.cos(a);
    return [ring * Math.cos(t * 2), .48 * Math.sin(t * 3) + .045 * Math.sin(a), ring * Math.sin(t * 2)];
  }
  const r = Math.sqrt(1 - y * y);
  return [Math.cos(a) * r, y, Math.sin(a) * r];
}

export function scatterPoint(index) {
  const a = seed(index, 4) * Math.PI * 2;
  const r = .9 + seed(index, 5) * .95;
  return [Math.cos(a) * r, Math.sin(a) * r * .86, (seed(index, 6) - .5) * 2.7];
}
