import test from 'ava';
import { omit } from './omit';

test('omit test', (t) => {
  const obj = {
    orange: 120,
    cherry: 300,
    apple: 100,
  };
  t.deepEqual(omit(obj, ['cherry']), {
    orange: 120,
    apple: 100,
  });
});
