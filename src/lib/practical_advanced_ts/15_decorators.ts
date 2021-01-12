import fetch from 'node-fetch'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// all decorator is function in ts
// targetはdecoratorがついているclass
function Get(url: string) {
  // nameはfield名
  return function (target: any, name: string) {
    const hiddenInstanceKey = `_$$${name}$$_`
    const init = () => {
      return fetch(url)
        .then(res => res.json());
    }
    Object.defineProperty(target, name, {
      get: function () {
        // (代入)とかで値返せる？
        // すでに取得済みの場合はそれを返す
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init());
      },
      // これがないと TypeError: Cannot redefine property: todos
      configurable: true,
    })
  }
}

function First() {
  return function (target: any, name: string) {
    const hiddenInstanceKey = `_$$${name}$$_`
    const prevInit = Object.getOwnPropertyDescriptor(target, name)?.get;

    if (!prevInit) {
      Object.defineProperty(target, name, { get: function () { return Promise.resolve([]) } })
      return;
    }

    const init = (prevInit: () => any) => {
      return prevInit()
        .then((res: Todo[]) => res[0]);
    }
    Object.defineProperty(target, name, {
      get: function () {
        // (代入)とかで値返せる？
        return this[hiddenInstanceKey] || (this[hiddenInstanceKey] = init(prevInit?.bind(this)));
      },
      configurable: true,
    })
  }
}

export class TodoService {
  // Property 'todos' has no initializer and is not definitely assigned in the constructor
  // !をつけると解消
  // ts 2.7.2から
  // "strictPropertyInitialization": trueの設定っぽい
  @First() // TODO: これだと、todosでPromise<Todo[]>なのにTodoが返るので型がおかしくなる
  // 同じフィールドに対してdecoratorつけないと、getOwnPropertyDescriptorでうまく取れない
  // ってことは、型は変わらないけどfilterするとかならできそう
  // もしくは、フィールド名とかdecoratorに指定する文字をうまく使って別フィールドから取るはありそう
  @Get('https://jsonplaceholder.typicode.com/todos')
  todos!: Promise<Todo[]>;
}
