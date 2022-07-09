import { Container } from './styles';

import { AddComment } from '../../components/AddComment';
import { DeleteModal } from '../../components/DeleteModal';

export function Home() {
  return (
    <Container>
      <AddComment />

      {false && <DeleteModal />}
    </Container>
  );
}
