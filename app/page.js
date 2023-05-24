'use client';

import MainButton from '@/components/ActionButton';
import { InputTittle, StyledInput } from '@/components/styles';
import useForm from '@/hooks/useForm';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  const router = useRouter();
  const [form, updateForm] = useForm({
    username: '',
  });
  const [disableButton, setDisableButton] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username.length >= 3) {
      router.push('/main');
    }
  };

  useEffect(() => {
    if (form.username.length > 2) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [form]);

  return (
    <SignUpBackground>
      <SignUpBox>
        <Tittle>Welcome to CodeLeap network!</Tittle>
        <StyledForm onSubmit={handleSubmit}>
          <InputTittle>Please enter your username</InputTittle>
          <StyledInput
            placeholder='John doe'
            name='username'
            onChange={updateForm}
            value={form.username}
          />
          <MainButton disabled={disableButton}>ENTER</MainButton>
        </StyledForm>
      </SignUpBox>
    </SignUpBackground>
  );
}

const SignUpBackground = styled.div`
  background-color: #ddd;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpBox = styled.div`
  background-color: #fff;
  max-width: 31.5rem;
  width: 100%;
  height: 12.5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Tittle = styled.div`
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.625rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
