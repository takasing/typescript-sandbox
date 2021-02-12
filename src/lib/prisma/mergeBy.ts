/**
 * 使用箇所では
 * const datasources = mergeBy(
     predefinedDatasources,
     inputDatasources,
     (source: any) => source.name,
   )
   こんな感じ
 * @param arr1 base array
 * @param arr2 同じkeyのやつがいたら上書きする、arr2の中でも後ろのやつが使われる
 * @param cb
 */
export const mergeBy = <T>(
  arr1: T[],
  arr2: T[],
  // uniquenessをcalculateする
  cb: (e: T) => string
): T[] => {
  const groupedArr1 = groupBy(arr1, cb);
  const groupedArr2 = groupBy(arr2, cb);
  // groupByしたやつのvaluesって元のarray？
  // arrをkeyでgroupしているのでT[][]か
  const result: T[] = Object.values(groupedArr2).map(
    // 後ろのやつが使われる
    (value) => value[value.length - 1]
  );
  const arr2Keys = Object.keys(groupedArr2);
  Object.entries(groupedArr1).forEach(([key, value]) => {
    if (!arr2Keys.includes(key)) {
      // arr2になければケツにつけられる
      result.push(value[value.length - 1]);
    }
  });
  return result;
};
export const groupBy = <T>(
  arr: T[],
  cb: (e: T) => string
): { [key: string]: T[] } => {
  return arr.reduce<{ [key: string]: T[] }>((acc, curr) => {
    const key = cb(curr);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});
};
