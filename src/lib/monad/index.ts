export const unit = <T>(a: T) => [a];

// モナド上、空配列を返す=削除
export const filterOdd = (a: number) => (a % 2 === 1 ? [a] : []);
export const add9 = (a: number) => unit(a + 9);
// これが合成関数！
export const add9FilterOdd = (a: number) =>
  unit(a).flatMap(add9).flatMap(filterOdd);
// 2項演算 => しかしこれだとネスト地獄でうまく行かない
export const plus = (a: number) => (b: number) => a + b;
// みたいに値＋オブジェクトのペアで書くとメソッドチェーンにできる
// Object.defineProperty(Number.prototype, 'plus', {
//   value: function (b: number) {
//     return this + b;
//   },
// });
// 数値はカッコで包むと数値オブジェクトになる, 値と演算はペア
// (1).plus(2) // 3
