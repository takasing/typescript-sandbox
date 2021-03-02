import test from 'ava';
import { add9, add9FilterOdd, filterOdd, plus, unit, unitPromise } from '.';

test('unit test', (t) => {
  t.deepEqual(unit('a'), ['a']);
});
test('filter odd test', (t) => {
  t.deepEqual([1, 2, 3, 4, 5].flatMap(filterOdd), [1, 3, 5]);
});
test('add 9 test', (t) => {
  t.deepEqual([1, 2, 3, 4, 5].flatMap(add9), [10, 11, 12, 13, 14]);
  t.deepEqual([1, 2, 3, 4, 5].flatMap(add9).flatMap(filterOdd), [11, 13]);
  t.deepEqual([1, 2, 3, 4, 5].flatMap(add9FilterOdd), [11, 13]);
});
test('plus test', (t) => {
  t.is(plus(1)(2), 3);
});

// これがモナド結合法則じゃ => モナド関数の合成
test('monad join test', (t) => {
  const dbl = (a: number) => [a * 2];
  const increment = (a: number) => [a + 1];
  t.deepEqual(
    [1, 2, 3].flatMap(dbl).flatMap(increment),
    [1, 2, 3].flatMap((a) => [a].flatMap(dbl).flatMap(increment))
  );
});

// Promiseはネストしない
// Promiseはthenする前に問答無用でflatかましているのと同じ
test('promise unit test', async (t) => {
  t.is(await unitPromise(3), 3);
  t.is(await unitPromise(unitPromise(3)), 3);
  t.is(await unitPromise(unitPromise(unitPromise(3))), 3);
});
