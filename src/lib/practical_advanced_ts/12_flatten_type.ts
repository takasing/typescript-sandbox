const numbers = [2, 1];
const someObject = {
  id: 21,
  name: 'object name',
}
const someBoolean = false;

type Flatten<T> = T extends any[] ? T[number] // array
  // object
  : T extends object ? T[keyof T]
  // booleanはconditionalにしてもboolean!
  : T;

export type FlattenedNumbersArray = Flatten<typeof numbers>;
export type FlattenedSomeObject = Flatten<typeof someObject>;
export type FlattenedSomeBoolean = Flatten<typeof someBoolean>;
