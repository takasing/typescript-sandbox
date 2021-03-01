import test from 'ava';
import { add9, add9FilterOdd, filterOdd, plus, unit } from '.';

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
