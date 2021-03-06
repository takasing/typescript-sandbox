import test from 'ava';
import { pick, map } from './proper_args_order';

test('pick test', (t) => {
  t.deepEqual(
    map(pick('name'))([
      { name: 'Rei' },
      { name: 'Asuka' },
      { name: 'Shinji' },
      { name: 'Toji' },
    ]),
    ['Rei', 'Asuka', 'Shinji', 'Toji']
  );
});
