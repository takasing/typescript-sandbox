type IEmail = {
  from: string;
  to: string[];
  body: string;
}

type ITodo = {
  isCompleted: boolean;
  text: string;
  linkedEmail: IEmail;
}

type IRootState = {
  userId: string;
  showCompletedOnly: boolean;
  todoTypes: string[];
  todos: ITodo[];
  iconGrid: string[][];
}

type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }
// 古い仕様だとobject[]とか[][]とかがうまく行かない？lint？
type IReadonlyRootState = DeepReadonly<IRootState>;
/*
type DeepReadonly<T> = T extends (infer E)[][] ?
    ReadonlyArray<ReadonlyArray<DeepReadonlyObject<E>>> :
  T extends (infer E)[] ? ReadonlyArray<DeepReadonlyObject<E>> :
  T extends object ? DeepReadonlyObject<T> :
  T;
 */

let state: IReadonlyRootState = {
  userId: 'userId',
  showCompletedOnly: false,
  todoTypes: ['study', 'housekeeping'],
  todos: [
    {
      isCompleted: false,
      text: 'grammar',
      linkedEmail: {
        from: 'takasing@gmail.com',
        to: ['takaty2@gmail.com'],
        body: 'to study grammar'
      }
    },
    {
      isCompleted: false,
      text: 'wash',
      linkedEmail: {
        from: 'takasing@gmail.com',
        to: ['takaty2@gmail.com'],
        body: 'to wash the dished'
      }
    }
  ],
  iconGrid: [
    ['icon', 'grid']
  ],
};

// この時点でclear type DeepReadonly<T> = { readonly [K in keyof T]: T[K] }
// @ts-expect-error
state.showCompletedOnly = true;
// この時点でclear type DeepReadonly<T> = { readonly [K in keyof T]: T[K] }
// @ts-expect-error
state.userId = "newId";
// この時点でclear type DeepReadonly<T> = { readonly [K in keyof T]: T[K] }
// @ts-expect-error
state.todoTypes = [];
// clear: type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }
// @ts-expect-error
state.todoTypes[0] = "diff type";
// clear: type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }
// @ts-expect-error
state.todos[1].linkedEmail.body = "hi";
// clear: type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> }
// @ts-expect-error
state.todos[1].linkedEmail.to[1] = "john@gmail.com";

// なんか最初からうまく行っています
state.todoTypes.map(todo => todo.toUpperCase());
// なんか最初からうまく行っています
state.iconGrid[0].map(icon => icon);
