import test from 'ava';

test('localeCompare test', (t) => {
  t.is('A'.localeCompare('B'), -1);
  t.is('A'.localeCompare('a'), 1);
  t.is('A'.localeCompare('a', undefined, { sensitivity: 'base' }), 0);
  t.is('A'.localeCompare('a', undefined, { caseFirst: 'upper' }), -1);
  t.is('A'.localeCompare('a', undefined, { caseFirst: 'lower' }), 1);
  t.is('11'.localeCompare('2', undefined, { numeric: true }), 1);
  t.is('11'.localeCompare('2', undefined, { numeric: false }), -1);
});
