import api from './api';

export async function getPosts() {
  const response = await api.get();
  return response.data;
}

export async function sendPost(username, title, content) {
  const data = {
    username,
    title,
    content,
  };

  await api.post('', data);
}

export async function deletePost(postId) {
  await api.delete(`${postId}/`);
}

export async function editPost(postId, title, content) {
  const data = {
    title,
    content,
  };

  await api.patch(`${postId}/`, data);
}
