import test from 'ava';
import { ActionType, isActionType } from './enum';

test('enum value test', t => {
  t.is(ActionType.CREATE, 'Create');
  t.is(ActionType.CREATE.toString(), 'Create');
  t.is(ActionType.CREATE, ActionType.CREATE);
  t.is(ActionType.CREATE.toUpperCase(), 'CREATE');
  t.is(ActionType['CREATE'], ActionType.CREATE);
  t.is('CREATE' in ActionType, true);
  t.is('TRUNCATE' in ActionType, false);
});

test('enum keys test', t => {
  t.is(isActionType('CREATE'), true)
  const str: unknown = 'CREATE';
  if (isActionType(str)) {
    t.is(ActionType[str], ActionType.CREATE);
  } else {
    t.is(typeof str, 'unknown');
  }
});
