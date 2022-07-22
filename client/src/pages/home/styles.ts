import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 1rem;

  width: calc(100vw - 2rem);
  padding: 2rem 0;

  @media (min-width: 768px) {
    width: calc(100vw - 6rem);
  }

  @media (min-width: 1024px) {
    width: 45.625rem;
  }
`;

export { Container };
