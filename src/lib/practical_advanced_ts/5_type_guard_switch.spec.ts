import test from 'ava';

import { todoReducer } from './5_type_guard_switch';

test('add test', t => {
  t.deepEqual(todoReducer(
    { type: 'Add', payload: 'to buy meet' },
    { todos: [] }).todos,
    ['to buy meet']
  );
});

test('remove all test', t => {
  t.deepEqual(todoReducer(
    { type: 'Remove All' },
    { todos: ['will', 'be', 'removing'] }).todos,
    []
  );
});

test('remove one test', t => {
  t.deepEqual(todoReducer(
    { type: 'Remove One', payload: 1 },
    { todos: ['will', 'be', 'removing'] }).todos,
    ['will', 'removing']
  );
});
