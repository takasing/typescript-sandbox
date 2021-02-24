import test from 'ava';
import {
  GenericNumber,
  getProperty,
  length,
  myPathThrough,
  myPathThrough2,
  pathThrough,
} from './generics';

test('path through type test', (t) => {
  t.is(typeof pathThrough(1), 'number');
  t.is(typeof pathThrough('path'), 'string');
  t.is(typeof pathThrough({ key: 'value' }), 'object');
  t.is(typeof pathThrough(undefined), 'undefined');
  // null is object!!
  t.is(typeof pathThrough(null), 'object');
  // @ts-expect-error
  t.is(typeof pathThrough<string>(1), 'number');
});

test('length test', (t) => {
  t.is(length(['a', 'b']), 2);
  t.is(length({ a: 'b', length: 3 }), 3);
});

test('my path through test', (t) => {
  t.is(myPathThrough('path'), 'path');
  t.is(myPathThrough2('path'), 'path');
});

test('generics class test', (t) => {
  const myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = (x, y) => {
    return x + y;
  };
  t.is(myGenericNumber.zeroValue, 0);
  t.is(myGenericNumber.add(1, 3), 4);

  const stringNumeric = new GenericNumber<string>();
  stringNumeric.zeroValue = '';
  stringNumeric.add = (x, y) => {
    return `"${x + y}"`;
  };
  t.is(stringNumeric.zeroValue, '');
  t.is(stringNumeric.add('Hello', 'World'), '"HelloWorld"');
});

test('get property test', (t) => {
  const x = { a: 1, b: 2, c: 3 };
  t.is(getProperty(x, 'a'), 1);
  // Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'.
  // t.is(getProperty(x, 'd'), 1);
});
