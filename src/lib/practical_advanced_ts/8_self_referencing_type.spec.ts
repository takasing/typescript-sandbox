import test from 'ava';
import { ListNode, Action, BackwardsActionIterator } from './8_self_referencing_type';

test('backwards test', t => {
  const action1 = { type: "LOGIN" };
  const action2 = { type: "LOAD_POSTS" };
  const action3 = { type: "DISPLAY_POSTS" };
  const action4 = { type: "LOGOUT" };

  const actionNode1: ListNode<Action> = {
    prev: null,
    next: null,
    value: action1
  };
  const actionNode2: ListNode<Action> = {
    prev: actionNode1,
    next: null,
    value: action2
  };
  actionNode1.next = actionNode2;

  const actionNode3: ListNode<Action> = {
    prev: actionNode2,
    next: null,
    value: action3
  };
  actionNode2.next = actionNode3;

  const actionNode4: ListNode<Action> = {
    prev: actionNode3,
    next: null,
    value: action4
  };
  actionNode3.next = actionNode4;

  const backwardsActionList = new BackwardsActionIterator(
    actionNode4
  );

  const result = [];
  for (let action of backwardsActionList) {
    result.push(action.type)
  }

  t.deepEqual(
    result,
    ['LOGOUT', 'DISPLAY_POSTS', 'LOAD_POSTS', 'LOGIN']
  );
});
