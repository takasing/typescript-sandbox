interface IPet {
  name: string;
  age: number;
  favoritePark?: string;
}

type ReadonlyPet = {
  +readonly [K in keyof IPet]-?: IPet[K];
}

const pet: IPet = { name: 'Gilgamesh', age: 6 };
const readonlyPet: ReadonlyPet = {
  name: 'Gilgamesh',
  age: 6,
  favoritePark: 'Yamashita Park',
};
