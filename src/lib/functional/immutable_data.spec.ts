import test from 'ava';
import { ImmutableGlass, MutableGlass } from './immutable_data';

test('immutable data test', (t) => {
  const mg1 = new MutableGlass('water', 100);
  const mg2 = mg1.takeDrink(40);
  t.deepEqual(mg1, mg2);

  const ig1 = new ImmutableGlass('coke', 150);
  const ig2 = ig1.takeDrink(30);
  t.notDeepEqual(ig1, ig2);
  t.is(ig1.amount, 150);
  t.is(ig2.amount, 120);
});
