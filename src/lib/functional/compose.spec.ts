import test from 'ava';
import { repeat, exclaim, scream, compose, pipe } from './compose';

test('compose test', (t) => {
  t.is(
    compose(repeat, exclaim, scream)('I love egghead'),
    'I LOVE EGGHEAD! I LOVE EGGHEAD!'
  );
  const repeatExcitedly = compose(repeat, exclaim);
  t.is(
    compose(repeatExcitedly, scream)('I love egghead'),
    'I LOVE EGGHEAD! I LOVE EGGHEAD!'
  );
});

test('compose fn test', (t) => {
  t.is(
    compose(
      (n: number) => n * 2,
      (n: number) => n * 3,
      (n: number) => n * 5
    )(5),
    150
  );
});

test('pipe test', (t) => {
  t.is(
    pipe(scream, exclaim, repeat)('I love egghead'),
    'I LOVE EGGHEAD! I LOVE EGGHEAD!'
  );
});
