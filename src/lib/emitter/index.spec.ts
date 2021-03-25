import test from 'ava';
import { EventEmitter } from 'events';

test('emitter test', (t) => {
  const emitter = new EventEmitter();
  emitter.on('ping', (msg: string) => {
    t.is(msg, 'pong');
    emitter.removeAllListeners();
  });
  emitter.emit('ping', 'pong');
});
