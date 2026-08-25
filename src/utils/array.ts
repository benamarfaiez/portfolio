export function splitArrayInHalf<T>(array: T[]): [T[], T[]] {
  const midpoint = Math.ceil(array.length / 2);
  return [array.slice(0, midpoint), array.slice(midpoint)];
}