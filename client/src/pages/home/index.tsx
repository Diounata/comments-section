import { Container } from './styles';

import { Comment } from '../../components/Comment';
import { AddComment } from '../../components/AddComment';
import { DeleteModal } from '../../components/DeleteModal';

import { useComment } from '../../contexts/CommentContext';

export function Home() {
  const { comments, isLoading } = useComment();

  return (
    <Container>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          {comments!.map(comment => (
            <>
              <Comment key={comment.id} comment={comment} type="comment" />

              {comment.replies!.map((reply, index) => (
                <Comment key={reply.id} comment={reply} isFirstReply={index === 0} type="reply" />
              ))}
            </>
          ))}

          <AddComment />

          {false && <DeleteModal />}
        </>
      )}
    </Container>
  );
}
