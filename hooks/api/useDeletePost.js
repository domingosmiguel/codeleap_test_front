import useAsync from '../useAsync';

import * as postsApi from '@/services/postsApi';

export default function useDeletePost() {
  const {
    loading: deletingPost,
    error: deleteError,
    act: deletePost,
  } = useAsync(postsApi.deletePost, false);

  return {
    deletingPost,
    deleteError,
    deletePost,
  };
}
