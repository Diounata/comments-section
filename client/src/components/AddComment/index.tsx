import { KeyboardEvent } from 'react';
import { Container, Comment, Avatar, Button } from './styles';

import { useComment } from '../../contexts/CommentContext';

interface Props {
  type: 'comment' | 'reply';
  isFirstReply?: boolean;
}

export function AddComment({ type, isFirstReply = false }: Props) {
  const { loggedUser } = useComment();

  const updateTextareaHeight = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
  };

  return (
    <Container type={type} isFirstReply={isFirstReply}>
      <Comment placeholder="Add a comment..." onKeyUp={updateTextareaHeight} />

      <Avatar src={`./src/assets/avatars/${loggedUser!.avatar}`} />

      <Button>Send</Button>
    </Container>
  );
}
