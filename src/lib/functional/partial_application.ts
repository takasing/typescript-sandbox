import fetch from 'node-fetch';

const getFromAPI = (baseURL: string) => <T>(endpoint: string) => <U>(
  callback: (args: T) => U
) => {
  return fetch(`${baseURL}${endpoint}`)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((err) => console.error(err.message));
};

type Post = {
  id: number;
  userId: string;
  title: string;
  body: string;
};

type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

const getJSONPlaceholder = getFromAPI('https://jsonplaceholder.typicode.com');
export const getAllPosts = getJSONPlaceholder<Post[]>('/posts');
export const getComments = (id: number) =>
  getJSONPlaceholder<Comment[]>(`/posts/${id}/comments`);
