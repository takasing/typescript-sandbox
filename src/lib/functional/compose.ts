export const repeat = (str: string) => `${str} ${str}`;
export const exclaim = (str: string) => `${str}!`;
export const scream = (str: string) => str.toUpperCase();

// composeってもしかして第一関数はparameterの型を柔軟にできる？
export const composeFn = <T>(
  fn: (param: T) => T,
  ...fns: Array<(param: T) => T>
) => fns.reduceRight((acc, fn) => (v: T) => fn(acc(v)), fn);

export const compose = <T>(...fns: Array<(param: any) => any>) => (x: T): T =>
  fns.reduceRight((acc, fn) => fn(acc), x);

export const pipe = <T>(...fns: Array<(str: T) => T>) => (x: T) =>
  fns.reduce((acc, fn) => fn(acc), x);
