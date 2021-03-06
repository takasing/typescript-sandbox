import test from 'ava';
import { slugify, slugify2 } from './trace';

test('trace test', (t) => {
  const bookTitles = [
    'The Culture Code',
    'Designing Your Life',
    'Algorithms to Live By',
  ];
  t.deepEqual(slugify(bookTitles), [
    'the-culture-code',
    'designing-your-life',
    'algorithms-to-live-by',
  ]);
  t.deepEqual(slugify2(bookTitles), [
    'the-culture-code',
    'designing-your-life',
    'algorithms-to-live-by',
  ]);
});
