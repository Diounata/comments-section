import styled, { keyframes } from 'styled-components';

const imgRotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  justify-self: center;

  font: ${({ theme }) => theme.FONT.BOLD_700};
  font-size: 1.5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;

    animation-name: ${imgRotationAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;

    transition: 1s;
  }
`;

export { Container };
