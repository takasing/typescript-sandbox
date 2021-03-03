import test from 'ava';
import { add2 } from './currying';

test('currying test', (t) => {
  t.is(add2(3)(4), 7);
  const add5 = add2(5);
  t.is(add5(5), 10);
});
