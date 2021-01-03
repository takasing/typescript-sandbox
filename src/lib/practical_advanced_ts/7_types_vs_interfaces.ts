type AnimalList = string[];
type AnimalListAlias = {
  [index: number]: string,
}
export let animalList: AnimalList;
let animalListAlias: AnimalListAlias;
// err because no length, and so on
// @ts-expect-error
animalList = animalListAlias;

// interfaceはtypeとinterfaceをextendsできる
interface ICat extends IFeline, Pet { }
// 使わないけどunused errになるので
export type TCat = Pet & IFeline;
type Pet = {
  bark(): void;
}
interface IFeline {
  nightVision: boolean;
}

interface IDog { }
interface ICat { }
// typeとinterfaceの大きな違いはunion使えるかどうか
export type PetType = IDog | ICat;

// ts-expect-errorで表現しようと思ったけど
// PetType is not definedで死んだので普通にコメントアウト

// interfaceもclassもunion typeはextends, implementsできない
// An interface can only extend an object type or intersection of object types with statically known members
// interface IPet extends PetType { }

// 'PetType' only refers to a type, but is being used as a value here.
// class CExtendedPet extends PetType { }

// A class can only implement an object type or intersection of object types with statically known members.
// class CImplementedPet implements PetType { }

// interfaceは複数同じ名前で書ける、んでmergeされる
// typeは無理
// 例えばライブラリを拡張したいときとかに使う(JQueryとか)
interface Animal {
  bark(): string;
}
interface Animal {
  eat(): string;
}
type Creature = {
  run(): void;
}
// classはtypeもinterfaceもimplementsできる
export class Cat implements Animal, Creature {
  food: string;
  constructor(food: string) {
    this.food = food;
  }
  bark() {
    return 'mew';
  }
  eat() {
    return this.food;
  }
  run() { }
}
