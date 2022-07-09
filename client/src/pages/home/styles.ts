import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100vw;
  min-height: 100vh;
  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.COLOR.VERY_LIGHT_GRAY};
`;

export { Container };
