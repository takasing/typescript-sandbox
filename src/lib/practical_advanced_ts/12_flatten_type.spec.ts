import test from 'ava';
import { Equal, Expect } from "../../util/assert";
import { FlattenedNumbersArray, FlattenedSomeBoolean, FlattenedSomeObject } from "./12_flatten_type";
// @ts-expect-error
type cases = [
  Expect<Equal<FlattenedNumbersArray, number>>,
  Expect<Equal<FlattenedSomeObject, string | number>>,
  Expect<Equal<FlattenedSomeBoolean, false>>,
]

test('fake test', t => {
  t.is(1, 1);
})
