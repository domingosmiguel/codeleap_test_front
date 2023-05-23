'use client';

import ActionButton from '@/components/ActionButton';
import useNewPost from '@/hooks/api/useNewPost';
import useForm from '@/hooks/useForm';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { InputTittle, StyledInput, StyledTextarea } from '../styles';

export default function NewPost() {
  const [username] = useState('miguel');
  const [disableButton, setDisableButton] = useState(true);
  const [form, updateForm, clearForm] = useForm({
    tittle: '',
    content: '',
  });
  const { sendingPost, postError, sendPost } = useNewPost();

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPost(username, form.tittle, form.content);
    clearForm();
  };

  useEffect(() => {
    if (form.tittle.length >= 3 && form.content.length >= 3) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [form]);

  useEffect(() => {
    if (postError) {
      alert('Unable to post');
    }
  }, [postError]);

  return (
    <StyledNewPost>
      <Tittle>What’s on your mind?</Tittle>
      <StyledForm onSubmit={handleSubmit}>
        <InputTittle>Tittle</InputTittle>
        <StyledInput
          placeholder='Hello world'
          name='tittle'
          onChange={updateForm}
          value={form.tittle}
        />
        <InputTittle>Content</InputTittle>
        <StyledTextarea
          placeholder='Content here'
          name='content'
          onChange={updateForm}
          value={form.content}
          rows={4}
        />
        <ActionButton disabled={disableButton} isLoading={sendingPost}>
          Create
        </ActionButton>
      </StyledForm>
    </StyledNewPost>
  );
}

const StyledNewPost = styled.div`
  background-color: #fff;

  min-height: 20.875rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

const Tittle = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.625rem;
  margin-bottom: 1.6rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
