import test from 'ava';

import { redirectWithIn, redirectWithTypeGuard } from './4_in';

test('type guard test', t => {
  t.is(redirectWithTypeGuard({ id: 'id', role: 'admin' }), 'do something: admin')
})

test('in test', t => {
  t.is(redirectWithIn({ id: 'id', role: 'admin in' }), 'do something: admin in')
})
