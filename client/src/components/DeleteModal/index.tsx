import { GlobalContainer, Modal, Title, Message, Footer, Button } from './styles';
import { useEffect } from 'react';

import { useComment } from '../../contexts/CommentContext';

export function DeleteModal() {
  const { toggleIsDeletingComment } = useComment();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <GlobalContainer>
      <Modal>
        <Title>Delete comment</Title>

        <Message>
          Are you sure you want to delete this comment? This will remove the comment and can't be
          undone
        </Message>

        <Footer>
          <Button variation="cancel" onClick={toggleIsDeletingComment}>
            No, cancel
          </Button>

          <Button variation="confirm" onClick={toggleIsDeletingComment}>
            Yes, delete
          </Button>
        </Footer>
      </Modal>
    </GlobalContainer>
  );
}
