import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export default function ActionButton({
  children,
  isLoading,
  disabled,
  onClick,
  backgroundColor = '#7695EC',
}) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled || isLoading}
      backgroundColor={backgroundColor}
    >
      {isLoading ? (
        <RotatingLines strokeColor='white' animationDuration='1' width='21' />
      ) : (
        children
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  width: 7.5rem;
  height: 2rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.187rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    background-color: #777;
  }

  &:hover {
    transform: scale(1.03);
  }
`;
