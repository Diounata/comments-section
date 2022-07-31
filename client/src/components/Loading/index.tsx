import { Container } from './styles';

import LoadingSVG from '../../assets/loading.svg';

export function Loading() {
  return (
    <Container>
      <img src={LoadingSVG} alt="Loading" /> Loading data
    </Container>
  );
}
