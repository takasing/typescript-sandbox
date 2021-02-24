import test from 'ava';
import { fromEntriesTuple } from './objects';

test('from entries test', (t) => {
  t.deepEqual(
    fromEntriesTuple([
      ['a', 123],
      ['b', 456],
    ]),
    { a: 123, b: 456 }
  );
});
