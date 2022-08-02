import { Container } from './styles';
import { Fragment } from 'react';

import { Loading } from '../../components/Loading';
import { Comment } from '../../components/Comment';
import { AddComment } from '../../components/AddComment';
import { DeleteModal } from '../../components/DeleteModal';

import { useComment } from '../../contexts/Comment';

export function Home() {
  const { comments, isDeletingComment, isLoading } = useComment();

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {comments!.map((comment, index) => (
            <Fragment key={comment.id}>
              <Comment
                comment={comment}
                isFirstReply={comment.type === 'reply' && comments[index - 1].type === 'comment'}
              />

              {/* <AddComment type="reply" isFirstReply={comment.replies!.length === 0} /> */}
            </Fragment>
          ))}

          <AddComment type="comment" />
        </>
      )}

      {isDeletingComment && <DeleteModal />}
    </Container>
  );
}
