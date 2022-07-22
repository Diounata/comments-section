import styled from 'styled-components';

import { Container as ContainerBase } from '../Comment/styles';

const Container = styled(ContainerBase)`
  grid-template-areas:
    'textarea textarea'
    'avatar button';

  @media (min-width: 1024px) {
    grid-template-areas: 'avatar textarea button';
    grid-template-columns: auto 1fr auto;
  }
`;

const Comment = styled.textarea`
  grid-area: textarea;

  width: 100%;
  min-height: 94px;
  max-height: 150px;
  padding: 1rem 1.5rem;

  border: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GRAY};
  border-radius: 8px;
  font-size: 0.8rem;
  color: #3e424b;
  line-height: 20px;

  transition: 0.2s;
  resize: none;
  outline: none;

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.COLOR.BLUE};
  }
`;

const Avatar = styled.img`
  grid-area: avatar;

  width: 2rem;
  height: 2rem;

  border-radius: 1rem;
`;

const Button = styled.button`
  grid-area: button;

  justify-self: flex-end;

  width: fit-content;
  height: fit-content;
  padding: 1rem 2rem;

  background-color: ${({ theme }) => theme.COLOR.BLUE};
  border-radius: 8px;

  font: ${({ theme }) => theme.FONT.MEDIUM_500};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.COLOR.WHITE};
  text-transform: uppercase;
`;

export { Container, Comment, Avatar, Button };
