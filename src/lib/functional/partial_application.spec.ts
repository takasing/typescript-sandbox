import test from 'ava';
import { getAllPosts, getComments } from './partial_application';

test('get from api test', async (t) => {
  const posts = await getAllPosts<{ [key: number]: string }[]>((posts) =>
    posts.map((p) => ({
      [p.id]: p.title,
    }))
  );
  if (!posts) {
    console.log('no response');
    return;
  }
  t.is(posts.length, 100);
  t.deepEqual(posts[0], {
    1: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  });

  const comments = await getComments(1)<{ [key: number]: string }[]>(
    (comments) =>
      comments.map((c) => ({
        [c.id]: c.email,
      }))
  );
  if (!comments) {
    console.log('no response');
    return;
  }

  t.is(comments.length, 5);
  t.deepEqual(comments[0], { 1: 'Eliseo@gardner.biz' });
});
