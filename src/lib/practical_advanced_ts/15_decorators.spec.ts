import test from 'ava';
import { TodoService } from './15_decorators';

test('todo service test', async t => {
  const todoService = new TodoService();
  // decoratorをつけたことでプロパティ呼び出しでget => init経由でAPI呼び出してる
  const todos = await todoService.todos;
  // とりあえず最初の項目だけテスト
  // t.deepEqual(todos[0], {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false,
  // })
  t.deepEqual(todos, {
    // @ts-expect-error
    // decoratorで返りの型がおかしい
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  })
})
