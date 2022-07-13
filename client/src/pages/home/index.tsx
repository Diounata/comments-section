import { Container } from './styles';

import { Comment } from '../../components/Comment';
import { AddComment } from '../../components/AddComment';
import { DeleteModal } from '../../components/DeleteModal';

export function Home() {
  return (
    <Container>
      <Comment isLoggedUser={false} type="comment" />
      <Comment isLoggedUser={true} type="reply" isFirstReply />
      <Comment isLoggedUser={false} type="reply" />

      <AddComment />

      {false && <DeleteModal />}
    </Container>
  );
}
