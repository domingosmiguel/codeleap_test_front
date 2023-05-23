import useAsync from '../useAsync';

import * as postsApi from '@/services/postsApi';

export default function useNewPost() {
  const {
    loading: sendingPost,
    error: postError,
    act: sendPost,
  } = useAsync(postsApi.sendPost, false);

  return {
    sendingPost,
    postError,
    sendPost,
  };
}
