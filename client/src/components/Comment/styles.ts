import styled from 'styled-components';

const Container = styled.section<{ type: 'comment' | 'reply'; isFirstReply: boolean }>`
  display: flex;
  flex-direction: column;
  justify-self: ${({ type }) => (type === 'reply' ? 'flex-end' : 'auto')};
  gap: 1.5rem;

  width: ${({ type }) => (type === 'reply' ? 'calc(100% - 1rem)' : '100%')};
  padding: 1rem;

  background-color: ${({ theme }) => theme.COLOR.WHITE};
  border-radius: 8px;

  font-size: 0.75rem;
  color: #7a7b7f;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: ${({ isFirstReply }) => (isFirstReply ? '0' : '-1rem')};

    width: 3px;
    height: 100%;
    padding-bottom: ${({ isFirstReply }) => (isFirstReply ? '0' : '1rem')};

    background-color: ${({ type }) => (type === 'reply' ? '#e8e9ed' : '')};
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 2rem;
    height: 2rem;

    border-radius: 1rem;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    font: ${({ theme }) => theme.FONT.MEDIUM_500};
    color: ${({ theme }) => theme.COLOR.DARK_BLUE};

    span {
      padding: 3px 6px;

      border-radius: 2px;
      background-color: ${({ theme }) => theme.COLOR.BLUE};
      font-size: 0.75rem;
      color: ${({ theme }) => theme.COLOR.WHITE};
    }
  }
`;

const Main = styled.main`
  line-height: 25px;
`;

const ReplyingTo = styled.span`
  font: ${({ theme }) => theme.FONT.MEDIUM_500};
  color: ${({ theme }) => theme.COLOR.BLUE};
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FeedbackContainer = styled.article`
  display: flex;
  gap: 1.35rem;

  padding: 1rem 0.75rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLOR.VERY_LIGHT_GRAY};
  color: ${({ theme }) => theme.COLOR.BLUE};

  button {
    display: grid;
    place-items: center;

    color: ${({ theme }) => theme.COLOR.LIGHT_BLUE};
  }

  p {
    font: ${({ theme }) => theme.FONT.MEDIUM_500};
  }
`;

const ButtonsContainer = styled.article`
  display: flex;
  align-items: center;
`;

const Button = styled.button<{ color: 'BLUE' | 'RED' }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 1rem;

  background-color: inherit;

  font: ${({ theme }) => theme.FONT.MEDIUM_500};
  color: ${({ color, theme }) => theme.COLOR[color]};
`;

export { Container, Header, Main, ReplyingTo, Footer, FeedbackContainer, ButtonsContainer, Button };
