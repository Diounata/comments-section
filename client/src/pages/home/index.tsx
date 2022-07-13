import { Container } from './styles';

import { Comment } from '../../components/Comment';
import { AddComment } from '../../components/AddComment';
import { DeleteModal } from '../../components/DeleteModal';

export function Home() {
  return (
    <Container>
      <Comment />
      <Comment />
      <Comment />

      <AddComment />

      {false && <DeleteModal />}
    </Container>
  );
}
