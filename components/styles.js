import { css, styled } from 'styled-components';

export const InputTittle = styled.div`
  margin-bottom: 0.5rem;
  margin-right: auto;

  font-size: 1rem;
  line-height: 1.1875rem;
`;

const InputCss = css`
  margin-bottom: 1rem;

  border: 1px solid #777;
  border-radius: 0.5rem;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 0.5rem;
  &::placeholder {
    color: #ccc;
  }
`;

export const StyledInput = styled.input`
  ${InputCss}
`;

export const StyledTextarea = styled.textarea`
  ${InputCss}
  min-height: 5.1rem;
`;

export const StyledHeader = styled.header`
  background-color: #7695ec;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.625rem;
  color: #fff;

  display: flex;
  align-items: center;
`;
