import test from 'ava';
import { PingClient } from './client';

test('client test', (t) => {
  const client = new PingClient();
  t.is(client.emit('ping', 'hey', 'oi'), true);
  t.is(client.emit('change'), false);
});
