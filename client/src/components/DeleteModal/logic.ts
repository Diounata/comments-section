import { useEffect } from 'react';

import { useComment } from '../../contexts/Comment';

export function useDeleteModal() {
  const { dispatch } = useComment();

  function handleDeleting() {
    dispatch({ type: 'DELETE_COMMENT' });
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return { handleDeleting };
}
