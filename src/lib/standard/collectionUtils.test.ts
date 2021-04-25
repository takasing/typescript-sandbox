import test from 'ava';
import { circularAccess } from './collectionUtils';

test('Circular access test', (t) => {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  t.is(circularAccess(arr, 2), 'c');
  t.is(circularAccess(arr, 5), 'a');
  t.is(circularAccess(arr, 12), 'c');
});
