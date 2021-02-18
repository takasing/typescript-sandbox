export type Maybe<T> = T | null;
export type UnMaybe<X> = X extends null | undefined
  ? never
  : X extends Maybe<X>
  ? X
  : never;
