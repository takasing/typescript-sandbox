type StringContainer = {
  value: string,
  format(): string,
  split(): string[],
}

export type NumberContainer = {
  // StringContainerとはvalueのtypeが異なる
  value: number,
  nearestPrime: number,
  round(): number,
}

export type Item<T> = {
  id: T,
  container: T extends string ? StringContainer : NumberContainer,
}

type ArrayFilter<T> = T extends any[] ? T : never;
/**
 * 1. distribute -> never | never | string[] | number[]
 * 2. "never is ignored" -> string[] | number[]
 */
export type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

export type Book = {
  id: string,
  tableOfContents: string[],
}
export type Tv = {
  id: number,
  diagonal: number;
}

export type IItemService = {
  // overload
  // getItem(id: string): Book;
  // getItem(id: number): Tv;
  // conditional typeだとoverloadせずに実装できる！
  getItem<T>(id: T): T extends string ? Book : Tv;
}


export const IItemServiceImpl: IItemService = {
  // return typeにanyでもうまくいくっぽい
  getItem: <T>(id: T)/*: any*/ => {
    //  Type '{ id: T & string; tableOfContents: string[]; diagonal?: undefined; }'
    // is not assignable to type
    // 'T extends string ? Book : Tv'
    if (typeof id === 'string') {
      // returnでconditional typeを使う場合はtype assertionが必要
      // type parameterだとtype assertionをtsがやってくれない？
      // as anyつけるか、overloadしましょうということらしい
      // https://stackoverflow.com/a/52818072
      // ちなみにtype assertionはasをつけるか、(<string>val)か
      return { id, tableOfContents: [id, `${id}_string`] } as any;
    } else if (typeof id === 'number') {
      return { id: id, diagonal: id * id } as any;
    }
    throw Error('Error!!')
  }
};
