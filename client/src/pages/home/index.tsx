import { Container } from './styles';

import { DeleteModal } from '../../components/DeleteModal';

export function Home() {
  return (
    <Container>
      {false && <DeleteModal />}
    </Container>
  );
}
