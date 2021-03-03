import test from 'ava';
import { cartTotal, createFoodItem, createUser } from './impure_fn';

test('impure test', (t) => {
  t.is(cartTotal(3), 57);
  t.notDeepEqual(createUser('Mark', 19), createUser('Mark', 19));
  t.notDeepEqual(
    createFoodItem('Cheeseburger'),
    createFoodItem('Cheeseburger')
  );
});
