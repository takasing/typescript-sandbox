import test from 'ava';
import { withCount } from './higher_order_fn';

test('higher order fn test', (t) => {
  const countedAdd = withCount((x, y) => x + y);
  t.is(countedAdd(1, 2), 3);
  t.is(countedAdd(3, 4), 7);
});
