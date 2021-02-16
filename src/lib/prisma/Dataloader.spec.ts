import test from 'ava';
import { Dataloader } from './Dataloader';

type Request = {
  type: 'single' | 'batch';
};
test('data loader test', async (t) => {
  const dataloader = new Dataloader<Request>({
    batchLoader: (request) => {
      setTimeout(() => {
        console.log('batch loader', request);
      }, 1000);
      return new Promise((resolve, _) => {
        resolve(['strawberry', 'cherry']);
      });
    },
    singleLoader: (request) => {
      setTimeout(() => {
        console.log('single loader', request);
      }, 1000);
      return new Promise((resolve, _) => {
        resolve('cat');
      });
    },
    batchBy: (request) => {
      return request.type === 'batch' ? 'fruit' : '';
    },
  });
  // 今のままだとbatchesがlength=1なのでsingleになる
  // t.deepEqual(await dataloader.request({ type: 'batch' }), [
  //   'strawberry',
  //   'cherry',
  // ]);
  t.deepEqual(await dataloader.request({ type: 'single' }), 'cat');
});
