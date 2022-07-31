import {
  Container,
  Header,
  Main,
  FeedbackContainer,
  Button,
  ReplyingTo,
  ButtonsContainer,
} from './styles';

import PlusSVG from '../../assets/icon-plus.svg';
import MinusSVG from '../../assets/icon-minus.svg';
import ReplySVG from '../../assets/icon-reply.svg';
import DeleteSVG from '../../assets/icon-delete.svg';
import EditSVG from '../../assets/icon-edit.svg';

import { CommentProps, useComment } from '../../contexts/CommentContext';

interface Props {
  comment: CommentProps;
  isFirstReply: boolean;
}

export function Comment({ comment, isFirstReply }: Props) {
  const { loggedUser, deleteComment, toggleIsDeletingComment, getCreatedAtString } = useComment();

  return (
    <Container isFirstReply={isFirstReply} type={comment.type}>
      <Header>
        <img src={`./src/assets/avatars/${comment.user.image}`} alt={comment.user.username} />

        <p>
          {comment.user.username}

          {comment.user.username === loggedUser!.username && <span>you</span>}
        </p>

        <span>{getCreatedAtString(comment.createdAt)}</span>
      </Header>

      <Main>
        {comment.replyingTo && <ReplyingTo>@{comment.replyingTo} </ReplyingTo>}

        {comment.content}
      </Main>

      <FeedbackContainer>
        <button>
          <img src={PlusSVG} alt="Like" title="Like" />
        </button>

        <p>{comment.score}</p>

        <button>
          <img src={MinusSVG} alt="Dislike" title="Dislike" />
        </button>
      </FeedbackContainer>

      <ButtonsContainer>
        {comment.user.username === loggedUser!.username ? (
          <>
            <Button color="RED" onClick={() => toggleIsDeletingComment(comment.id)}>
              <img src={DeleteSVG} alt="Delete" title="Delete" /> Delete
            </Button>

            <Button color="BLUE">
              <img src={EditSVG} alt="Edit" title="Edit" /> Edit
            </Button>
          </>
        ) : (
          <Button color="BLUE">
            <img src={ReplySVG} alt="Reply" title="Reply" /> Reply
          </Button>
        )}
      </ButtonsContainer>
    </Container>
  );
}
