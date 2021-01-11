import test from 'ava';
import { Equal, Expect } from '../../util/assert';
import { generateId, lookupEntity, UnpackPromise } from './13_infer';

test('lookup entity test', t => {
  const entity = lookupEntity(generateId(100));
  t.is(typeof entity.id, 'string');
})

const arr = [Promise.resolve(true)];
// @ts-expect-error
type cases = [
  Expect<Equal<UnpackPromise<typeof arr>, boolean>>
]
