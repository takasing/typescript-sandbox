// export const arrayToMap = <T, K extends keyof T>(
//   arr: T[]
// ): { K: T[K] } => {
//   console.log(arr);
//   // 'X' could be instantiated with an arbitrary type which could be unrelated to '{ key: string; status: true; }[]'
//   // return [{ key: 'hoge', status: true }];
//   return {};
// };

export const fromEntriesTuple = (entries: [key: string, value: any][]) => {
  return Object.fromEntries(entries);
};
