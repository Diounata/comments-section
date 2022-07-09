import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  padding: 1rem;

  background-color: ${({ theme }) => theme.COLOR.WHITE};
  border-radius: 8px;
`;

const Comment = styled.textarea`
  width: 100%;
  min-height: 94px;
  max-height: 150px;
  padding: 1rem 1.5rem;

  border: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GRAY};
  border-radius: 8px;
  font-size: 0.8rem;
  line-height: 20px;

  transition: 0.2s;
  resize: none;
  outline: none;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.COLOR.BLUE};
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;

  border-radius: 1rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;

  background-color: ${({ theme }) => theme.COLOR.BLUE};
  border-radius: 8px;

  font: ${({ theme }) => theme.FONT.MEDIUM_500};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.COLOR.WHITE};
  text-transform: uppercase;
`;

export { Container, Comment, Footer, Avatar, Button };
