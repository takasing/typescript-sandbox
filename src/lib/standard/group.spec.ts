import test from 'ava';
import { groupBy } from './group';

test('group by test', (t) => {
  t.deepEqual(
    groupBy(
      [
        { id: 'first', name: 'ayanami' },
        { id: 'second', name: 'soryu' },
        { id: 'third', name: 'ikari' },
      ],
      (v) => v.id
    ),
    [
      ['first', [{ id: 'first', name: 'ayanami' }]],
      ['second', [{ id: 'second', name: 'soryu' }]],
      ['third', [{ id: 'third', name: 'ikari' }]],
    ]
  );
});
