import test from 'ava';
import {
  IItemService, Item,/*, StringsOrNumbers*/
  IItemServiceImpl
} from './11_conditional_type';
// import { Equal, Expect } from '../../util/assert';

test('test item', t => {
  const item: Item<number> = {
    // @ts-expect-error
    id: "a23d",
    container: {
      value: 1, nearestPrime: 2, round: () => 3,
    },
  }
  t.is(typeof item.container.value, 'number');
});

// @ts-expect-error
type cases = [
  // Expect<Equal<StringsOrNumbers, string[] | number[]>>
]

test('conditional type test', t => {
  const itemService: IItemService = IItemServiceImpl;
  const book = itemService.getItem("10");
  t.deepEqual(book.tableOfContents, ['10', '10_string']);
  const tv = itemService.getItem(10);
  t.deepEqual(tv, { id: 10, diagonal: 100 });
})
