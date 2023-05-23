'use client';

import NewPost from '@/components/main/NewPost';
import Post from '@/components/main/Post';
import { StyledHeader } from '@/components/styles';
import usePosts from '@/hooks/api/usePosts';
import useModalDelete from '@/hooks/modalAction/useModalDelete';
import useModalEdit from '@/hooks/modalAction/useModalEdit';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Main() {
  const [data, setData] = useState(CopiedData);
  const [now, setNow] = useState(new Date());
  const [post, setPost] = useState({
    tittle: '',
    content: '',
  });

  const { openDeleteModal, DeleteModal, deleteModalProps } = useModalDelete(
    post.id
  );
  const { openEditModal, EditModal, editModalProps } = useModalEdit(post);
  const { posts, postsLoading, postsError, getPosts } = usePosts();

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
      getPosts();
    }, 5000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (posts) {
      setData(posts);
    }
  }, [posts]);

  return (
    <StyledBackground>
      <PostsScroll>
        <PageHeader>CodeLeap Network</PageHeader>
        <PostsContainer>
          <NewPost />
          {data.results.map((post) => (
            <Post
              key={post.id}
              data={post}
              now={now}
              openDeleteModal={openDeleteModal}
              openEditModal={openEditModal}
              setPost={setPost}
            />
          ))}
        </PostsContainer>
      </PostsScroll>
      <DeleteModal {...deleteModalProps} />
      <EditModal {...editModalProps} />
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  background-color: #ddd;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostsScroll = styled.div`
  background-color: #fff;
  max-width: 50rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PageHeader = styled(StyledHeader)`
  min-height: 5rem;
  position: sticky;
  padding: 0 2.3125rem;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
`;

const CopiedData = {
  count: 905,
  next: 'https://dev.codeleap.co.uk/careers/?limit=10&offset=10',
  previous: null,
  results: [
    {
      id: 61701,
      username: 'userTest',
      created_datetime: '2023-05-18T16:27:55.415170Z',
      title: 'test',
      content: 'test',
    },
    {
      id: 61697,
      username: 'Laís',
      created_datetime: '2023-05-18T15:58:17.923043Z',
      title: 'My first article',
      content: 'I love to write',
    },
    {
      id: 61695,
      username: 'userTest',
      created_datetime: '2023-05-18T15:21:23.837063Z',
      title: 'a',
      content: 'a',
    },
    {
      id: 61694,
      username: 'userTest',
      created_datetime: '2023-05-18T15:21:10.879173Z',
      title: '.',
      content: '.',
    },
    {
      id: 61689,
      username: 'Luna',
      created_datetime: '2023-05-18T14:40:34.337219Z',
      title: 'Lorem Ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales lacinia diam vulputate sollicitudin. Aliquam tempor a purus vel sollicitudin. Praesent bibendum turpis bibendum eros interdum, sed pharetra eros tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse dui nibh, facilisis eu ultrices eu, commodo ut tortor. Cras et nisl massa. Integer tristique enim cursus vehicula aliquet. Donec ultricies arcu posuere ex interdum tempus. Nam consequat auctor magna, in rutrum velit ultrices ut. Sed hendrerit sit amet odio eu finibus. Nunc egestas nec leo sed pulvinar.\n\nVestibulum maximus fermentum dictum. Vivamus efficitur justo tortor, porta ornare augue laoreet ut. Morbi rhoncus orci imperdiet justo congue, et pretium dui dictum. Cras nibh arcu, consectetur ac vulputate quis, pulvinar volutpat arcu. Sed pulvinar arcu eu sapien posuere, nec viverra ante viverra. Nunc et mauris sagittis, vulputate justo eget, tempus ligula. Mauris sit amet maximus magna. Ut purus nisi, volutpat sit amet vulputate sed, pulvinar quis diam. Etiam dolor metus, scelerisque at ante nec, vehicula mollis urna. Quisque ultrices metus justo, vel egestas nisl euismod in. Suspendisse interdum consequat tortor, sed elementum urna. Integer dapibus ut enim id suscipit. Vivamus bibendum dolor nunc, at consectetur eros imperdiet at. Mauris maximus neque vel sagittis faucibus. Aenean feugiat molestie augue.',
    },
    {
      id: 61688,
      username: 'Gustavo Pereira',
      created_datetime: '2023-05-18T14:39:33.238021Z',
      title: 'Opa',
      content: 'Skaks',
    },
    {
      id: 61687,
      username: 'Nathan Barros',
      created_datetime: '2023-05-18T14:37:13.020966Z',
      title: 'Falsificação de pendrive como meio de produção de milho',
      content: 'milho',
    },
    {
      id: 61686,
      username: 'Felipe Mendes',
      created_datetime: '2023-05-18T14:35:21.758270Z',
      title: 'Progresso',
      content:
        'Como anda o progresso de vcs ai?\nDeem uma olhada no meu: https://code-leap-ten.vercel.app/',
    },
    {
      id: 61685,
      username: 'Felipe Mendes',
      created_datetime: '2023-05-18T14:34:28.955707Z',
      title: 'Teste',
      content: 'Teste',
    },
    {
      id: 61682,
      username: 'adm',
      created_datetime: '2023-05-18T13:30:13.298162Z',
      title: 'olha o linguajar',
      content: 'sem palavrão hein',
    },
  ],
};
