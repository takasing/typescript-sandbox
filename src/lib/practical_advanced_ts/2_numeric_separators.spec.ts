import test from 'ava';

import { numericSeparator, withDecimal } from './2_numeric_separators';

test('numeric separator test', t => {
  t.is(numericSeparator(), 123456789);
});
test('with decimal test', t => {
  t.is(withDecimal(), 123456789.123456);
});
