import { useEffect } from 'react';

import { useComment } from '../../contexts/CommentContext';

export function useDeleteModal() {
  const { deletingCommentID, deleteComment, toggleIsDeletingComment } = useComment();

  function handleDeleting() {
    deleteComment(deletingCommentID);
    toggleIsDeletingComment('');
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return { handleDeleting };
}
