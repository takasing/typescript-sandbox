import { compose } from './compose';
import { map } from './proper_args_order';

export const trace = (msg: string) => <T>(x: T) => (
  // これでxが返るらしい
  console.log(msg, x), x
);
export const join = (sep: string) => (xs: string[]) => xs.join(sep);
export const lowerCase = (str: string) => str.toLowerCase();
export const split = (pattern: string) => (str: string) => str.split(pattern);
export const slugify = compose(
  // map(trace('joined')),
  map(join('-')),
  // map(trace('split')),
  map(split(' ')),
  // map(trace('lower')),
  map(lowerCase)
);

// map3回書かなくていいように
export const slugify2 = compose(map(compose(join('-'), split(' '), lowerCase)));
