import { GlobalContainer, Modal, Title, Message, Footer, Button } from './styles';

export function DeleteModal() {
  return (
    <GlobalContainer>
      <Modal>
        <Title>Delete comment</Title>

        <Message>
          Are you sure you want to delete this comment? This will remove the comment and can't be undone
        </Message>

        <Footer>
          <Button variation="cancel">No, cancel</Button>
          <Button variation="confirm">Yes, delete</Button>
        </Footer>
      </Modal>
    </GlobalContainer>
  );
}
