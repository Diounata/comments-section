import { KeyboardEvent } from 'react';
import { Container, Comment, Footer, Avatar, Button } from './styles';

export function AddComment() {
  const updateTextareaHeight = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
  };

  return (
    <Container>
      <Comment placeholder="Add a comment..." onKeyUp={updateTextareaHeight} />

      <Footer>
        <Avatar src="https://github.com/Diounata.png" />
        <Button>Send</Button>
      </Footer>
    </Container>
  );
}
