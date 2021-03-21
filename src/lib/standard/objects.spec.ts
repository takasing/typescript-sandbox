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

test('to map test', (t) => {
  const arr = [
    { k: 'key1', v: 'value1' },
    { k: 'key2', v: 'value2' },
  ];
  t.deepEqual(
    arr.reduce((acc, cur) => ({ ...acc, [cur.k]: cur.v }), {}),
    {
      key1: 'value1',
      key2: 'value2',
    }
  );
});
