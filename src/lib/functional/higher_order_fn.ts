/**
 * 1. accept function
 * 2. return a new function
 * @param fn
 */
export const withCount = <T extends (...args: any[]) => any>(
  fn: T
): ((...funcArgs: Parameters<T>) => ReturnType<T>) => {
  // let count = 0;
  return (...args: Parameters<T>) => {
    // if call 2 times, count will become 2
    // console.log(`Call count: ${++count}`);
    return fn(...args);
  };
};
