// reduxとかでprevious actionを参照するactionとかでLinkedList使う

export interface Action {
  type: string;
}

export interface ListNode<T> {
  readonly value: T;
  next: ListNode<T> | null;
  readonly prev: ListNode<T> | null;
}

// actionを後ろにさかのぼっていく
export class BackwardsActionIterator implements IterableIterator<Action> {
  constructor(private _currentActionNode: ListNode<Action> | null) { }
  // defined by ES6
  [Symbol.iterator](): IterableIterator<Action> {
    return this;
  }
  next(): IteratorResult<Action> {
    const cur = this._currentActionNode;
    if (!cur || !cur.value) {
      // 終わるときこれを返すという仕様
      return { value: null, done: true }
    }
    this._currentActionNode = cur.prev;
    return { value: cur.value, done: false };
  }
}
