import test from 'ava';
import { Restaurant, Sandwich, SandwichRestaurant } from './union';

test('restaurant test', (t) => {
  const Starbucks = new Restaurant(
    [
      { title: 'coffee', value: 'c' },
      { title: 'espresso', value: 'e' },
    ],
    (v) => console.log('new', v)
  );
  const m = Starbucks.pick('coffee');
  t.is(m?.value, 'c');
});

test('sandwich restaurant test', (t) => {
  const res = new SandwichRestaurant<Sandwich>([
    { title: 'BLT', value: 'b' },
    { title: 'BaconEgg', value: 'be' },
    // @ts-expect-error
    { title: 'BaconEggs', value: 'be' },
  ]);
  t.deepEqual(res.pick('BLT'), 'BLT');
});
