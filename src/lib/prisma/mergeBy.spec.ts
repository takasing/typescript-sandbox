import test from 'ava';
import { mergeBy } from './mergeBy';

test('mergeBy test', (t) => {
  const arr1 = [
    { source: 'kinoe', name: '冨岡義勇' },
    { source: 'hinoe', name: '竈門炭治郎' },
    { source: 'kanoe', name: '村田' },
  ];
  const arr2 = [
    { source: 'hinoe', name: '我妻善逸' },
    { source: 'hinoe', name: '嘴平伊之助' },
    { source: 'kinoe', name: '煉獄杏寿郎' },
    { source: 'kinoe', name: '不死川実弥' },
    { source: 'hinoto', name: '栗花落カナヲ' },
  ];
  t.deepEqual(
    mergeBy(arr1, arr2, (k) => k.source),
    [
      { source: 'hinoe', name: '嘴平伊之助' },
      { source: 'kinoe', name: '不死川実弥' },
      { source: 'hinoto', name: '栗花落カナヲ' },
      { source: 'kanoe', name: '村田' },
    ]
  );
});
