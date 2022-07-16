import styled from 'styled-components';

const GlobalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0 1rem;

  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem 1.6875rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLOR.WHITE};
`;

const Title = styled.h1`
  font: ${({ theme }) => theme.FONT.MEDIUM_500};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLOR.DARK_BLUE};
`;

const Message = styled.p`
  color: ${({ theme }) => theme.COLOR.GRAYISH_BLUE};
  line-height: 1.2rem;
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

const Button = styled.button<{ variation: 'cancel' | 'confirm' }>`
  padding: 1rem 0;

  border-radius: 8px;
  background-color: ${({ theme, variation }) =>
    variation === 'confirm' ? theme.COLOR.RED : theme.COLOR.GRAYISH_BLUE};

  font: ${({ theme }) => theme.FONT.BOLD_700};
  font-size: 0.8rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLOR.WHITE};
`;

export { GlobalContainer, Modal, Title, Message, Footer, Button };
