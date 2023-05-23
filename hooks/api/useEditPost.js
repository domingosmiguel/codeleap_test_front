import useAsync from '../useAsync';

import * as postsApi from '@/services/postsApi';

export default function useEditPost() {
  const {
    loading: editingPost,
    error: editError,
    act: editPost,
  } = useAsync(postsApi.editPost, false);

  return {
    editingPost,
    editError,
    editPost,
  };
}
