import useAsync from '../useAsync';

import * as postsApi from '@/services/postsApi';

export default function usePosts() {
  const {
    data: posts,
    loading: postsLoading,
    error: postsError,
    act: getPosts,
  } = useAsync(postsApi.getPosts);

  return {
    posts,
    postsLoading,
    postsError,
    getPosts,
  };
}
