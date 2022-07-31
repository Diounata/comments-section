import { GlobalContainer, Modal, Title, Message, Footer, Button } from './styles';

import { useComment } from '../../contexts/CommentContext';
import { useDeleteModal } from './logic';

export function DeleteModal() {
  const { toggleIsDeletingComment } = useComment();
  const { handleDeleting } = useDeleteModal();

  return (
    <GlobalContainer>
      <Modal>
        <Title>Delete comment</Title>

        <Message>
          Are you sure you want to delete this comment? This will remove the comment and can't be
          undone
        </Message>

        <Footer>
          <Button variation="cancel" onClick={() => toggleIsDeletingComment('')}>
            No, cancel
          </Button>

          <Button variation="confirm" onClick={handleDeleting}>
            Yes, delete
          </Button>
        </Footer>
      </Modal>
    </GlobalContainer>
  );
}
