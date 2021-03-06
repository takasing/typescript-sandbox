// curring functionの場合引数の順番が使い勝手上重要
// Most specific arguments => Least specific arguments
// つまりよく使われるやつ => 頻繁に変わるやつの順番
// 特にデータはよく変わるが、処理は共通なことが多いので
// most(処理(に必要なデータ)) => least(データ)の順がよい
export const pick = (key: string) => <T extends { [key: string]: string }>(
  obj: T
) => obj[key];
export const map = <T, U>(fn: (obj: T) => U) => (xs: T[]) => xs.map(fn);
