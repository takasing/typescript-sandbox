import test from 'ava';
import { isEmpty } from './regex';

test('empty test', (t) => {
  t.is(isEmpty(' '), true);
  t.is(isEmpty(''), true);
});
