export const omit = <T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  return (
    (Object.keys(obj) as K[])
      .filter((key) => !keys.includes(key))
      // Type 'K' cannot be used to index type 'Omit<T, K>'.ts(2536)
      // .reduce<Omit<T, K>>((result, key) => {
      .reduce((result, key) => {
        result[key] = obj[key];
        return result;
      }, {} as any)
  );
};
