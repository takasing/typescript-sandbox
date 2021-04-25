export const circularAccess = <T>(arr: T[], idx: number) => {
  const n = arr.length;
  return arr[((idx % n) + n) % n];
};
