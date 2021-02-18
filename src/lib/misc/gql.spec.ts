import test from 'ava';
import { Equal, Expect } from '../../util/assert';
import { Maybe, UnMaybe } from './gql';

const a: Maybe<string> = null;
const b: Maybe<string> = 'test';
// @ts-expect-error
type cases = [
  Expect<Equal<UnMaybe<typeof a>, never>>,
  Expect<Equal<UnMaybe<typeof b>, string>>
];

test('fake test', (t) => {
  t.is(1, 1);
});
