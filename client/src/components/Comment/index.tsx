import {
  Container,
  Header,
  Main,
  Footer,
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

interface IComment extends CommentProps {
  replyingTo?: string;
}

interface Props {
  comment: IComment;
  isFirstReply?: boolean;
  type: 'comment' | 'reply';
}

export function Comment({ isFirstReply = false, type, comment }: Props) {
  const { loggedUser } = useComment();

  const { content, createdAt, replyingTo, score, user } = comment;

  return (
    <Container isFirstReply={isFirstReply} type={type}>
      <Header>
        <img src={`./src/assets/avatars/${user.image}`} alt={user.username} />

        <p>
          {user.username}

          {user.username === loggedUser!.username && <span>you</span>}
        </p>

        <span>{createdAt}</span>
      </Header>

      <Main>
        {type === 'reply' && <ReplyingTo>@{replyingTo} </ReplyingTo>}

        {content}
      </Main>

      <Footer>
        <FeedbackContainer>
          <button>
            <img src={PlusSVG} alt="Like" title="Like" />
          </button>

          <p>{score}</p>

          <button>
            <img src={MinusSVG} alt="Dislike" title="Dislike" />
          </button>
        </FeedbackContainer>

        <ButtonsContainer>
          {user.username === loggedUser!.username ? (
            <>
              <Button color="RED">
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
      </Footer>
    </Container>
  );
}
