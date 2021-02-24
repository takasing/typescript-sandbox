// Object.fromEntriesが使いやすい形にするためにtupleで返している
export const groupBy = <K, V>(
  array: readonly V[],
  // idx, srcは使い方わからんので事例調べよう
  getKey: (cur: V /*, idx: number, src: readonly V[]*/) => K
): [K, V[]][] =>
  Array.from(
    array.reduce((map, cur /*, idx, src*/) => {
      const key = getKey(cur /*, idx, src*/);
      const list = map.get(key);
      // listすでにある場合は追加
      if (list) list.push(cur);
      // ない場合は1つの要素でlistを作成
      else map.set(key, [cur]);
      return map;
    }, new Map<K, V[]>())
  );
