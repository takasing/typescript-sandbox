import test from 'ava';

test('reduce right test', (t) => {
  t.deepEqual(
    [
      [0, 1],
      [2, 3],
      [4, 5],
    ].reduceRight((acc, cur) => acc.concat(cur)),
    [4, 5, 2, 3, 0, 1]
  );
});

test('reduce fn test', (t) => {
  t.deepEqual(
    // fn3(fn2(fn1(value))) <= これがcompose
    [
      // ((n+1)*3) * 2 => 30
      (n: number) => {
        // console.log('1st', n);
        return n * 3;
      },
      // 初期値は前の関数の実行結果
      // (30 + 3) * 2 => 66
      (n: number) => {
        // console.log('2nd', n);
        return n + 3;
      },
      // (66 * 10) * 2 => 660 * 2 => 1320
      (n: number) => {
        // console.log('3rd', n);
        return n * 10;
      },
    ].reduce(
      (acc, cur) => (v: number) => cur(acc(v)) * 2,
      (v: number) => v + 1
    )(4),
    1320
  );
});
