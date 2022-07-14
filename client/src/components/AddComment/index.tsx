import { KeyboardEvent } from 'react';
import { Container, Comment, Footer, Avatar, Button } from './styles';

import { useComment } from '../../contexts/CommentContext';

export function AddComment() {
  const { loggedUser } = useComment();

  const updateTextareaHeight = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
  };

  return (
    <Container>
      <Comment placeholder="Add a comment..." onKeyUp={updateTextareaHeight} />

      <Footer>
        <Avatar src={`./src/assets/avatars/${loggedUser!.avatar}`} />

        <Button>Send</Button>
      </Footer>
    </Container>
  );
}
