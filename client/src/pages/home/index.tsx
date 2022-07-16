import { Container } from './styles';
import { Fragment } from 'react';

import { Comment } from '../../components/Comment';
import { AddComment } from '../../components/AddComment';
import { DeleteModal } from '../../components/DeleteModal';

import { useComment } from '../../contexts/CommentContext';

export function Home() {
  const { comments, isDeletingComment, isLoading } = useComment();

  return (
    <Container>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          {comments!.map(comment => (
            <Fragment key={comment.id}>
              <Comment comment={comment} type="comment" />

              {comment.replies!.map((reply, index) => (
                <Comment key={reply.id} comment={reply} isFirstReply={index === 0} type="reply" />
              ))}

              {/* <AddComment type="reply" isFirstReply={comment.replies!.length === 0} /> */}
            </Fragment>
          ))}

          <AddComment type="comment" />

          {isDeletingComment && <DeleteModal />}
        </>
      )}
    </Container>
  );
}
