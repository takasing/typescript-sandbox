import test from 'ava';
import { Cat } from './7_types_vs_interfaces';

test('merge interface test', t => {
  const gilgamesh = new Cat('royal canin');
  t.is(gilgamesh.eat(), 'royal canin');
});
