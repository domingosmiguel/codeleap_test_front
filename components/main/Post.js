'use client';

import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { StyledHeader } from '../styles';

export default function Post({
  data,
  now,
  openDeleteModal,
  openEditModal,
  setPost,
}) {
  const [username] = useState('miguel');
  const [owner] = useState(data.username === username);
  const [timeDifference, setTimeDifference] = useState(
    time_diff(now, data.created_datetime)
  );

  useEffect(() => {
    setTimeDifference(time_diff(now, data.created_datetime));
  }, [now]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledPost>
      <PostHeader>
        {data.title}
        {owner && (
          <StyledIcons>
            <MdDeleteForever
              onClick={() => {
                openDeleteModal();
                setPost(data);
              }}
            />
            <BiEdit
              onClick={() => {
                openEditModal();
                setPost(data);
              }}
            />
          </StyledIcons>
        )}
      </PostHeader>
      <PostBox>
        <UsernameAndTime>
          <StyledUsername>@{data.username}</StyledUsername>
          <StyledTime>{timeDifference}</StyledTime>
        </UsernameAndTime>
        <StyledContent>{data.content}</StyledContent>
      </PostBox>
    </StyledPost>
  );
}

const time_diff = (now, postTime) => {
  const milliseconds = now.getTime() - new Date(postTime).getTime();

  const minutes = parseInt(milliseconds / 60000, 10);
  if (minutes === 0) return `now`;
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

  const hours = parseInt(minutes / 60, 10);
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

  const days = parseInt(hours / 24, 10);
  if (days < 30) return `${days} day${days > 1 ? 's' : ''} ago`;

  const months = parseInt(days / 30, 10);
  if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;

  const years = parseInt(months / 12, 10);
  return `${years} year${years > 1 ? 's' : ''} ago`;
};

const StyledPost = styled.div`
  border: 1px solid #ccc;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const PostHeader = styled(StyledHeader)`
  min-height: 4.375rem;
  height: fit-content;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
`;

const StyledIcons = styled.div`
  max-width: 5.1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > svg {
    cursor: pointer;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const PostBox = styled.div`
  background-color: #fff;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UsernameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const textCss = css`
  font-size: 1.125rem;
  line-height: 1.3125rem;
`;

const StyledUsername = styled.div`
  ${textCss};
  font-weight: 700;
  color: #777777;
`;

const StyledTime = styled.div`
  ${textCss}
  color: #777777;
`;

const StyledContent = styled.div`
  ${textCss}
`;
