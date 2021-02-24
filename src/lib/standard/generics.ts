interface GenericPathThroughFn {
  <T>(arg: T): T;
}
interface GenericPathThroughFn2<T> {
  (arg: T): T;
}
export const pathThrough = <T>(arg: T): T => {
  return arg;
};
interface Lengthwise {
  length: number;
}
// export const length = <T extends { length: number }>(arg: T): number => {
export const length = <T extends Lengthwise>(arg: T): number => {
  return arg.length;
};
// export const myPathThrough: <U>(arg: U) => U = pathThrough;
// can also write as object literal
// export const myPathThrough: { <U>(arg: U): U } = pathThrough;
export const myPathThrough: GenericPathThroughFn = pathThrough;
export const myPathThrough2: GenericPathThroughFn2<string> = pathThrough;

export class GenericNumber<T> {
  // strictPropertyInitialization=trueだとconstructorで初期化しないと怒られる
  // しかしclassの場合はconstructor以外で初期化されるケースもある
  // => assertion modifier "!"
  // コンパイラにnon-nullを宣言している
  // 例えばinitialize()メソッドで初期化する場合とか
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

export const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

// factoryを作るときはconstructorで制約
export const create = <T>(c: { new (): T }): T => {
  return new c();
};

class BeeKeeper {
  hasMask: boolean;
  constructor(hasMask: boolean) {
    this.hasMask = hasMask;
  }
}
class ZooKeeper {
  nameTag: string;
  constructor(nameTag: string) {
    this.nameTag = nameTag;
  }
}
class Animal {
  numLegs!: number;
}
export class Bee extends Animal {
  keeper!: BeeKeeper;
}
export class Lion extends Animal {
  keeper!: ZooKeeper;
}
// TODO: test
export const createInstance = <A extends Animal>(c: new () => A): A => {
  return new c();
};
