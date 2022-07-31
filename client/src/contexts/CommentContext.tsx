import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';

import { data } from '../data/mock';

const CommentContext = createContext({} as Props);

interface ChildrenProps {
  children: ReactNode;
}

export interface UserProps {
  image: string;
  username: string;
}

export interface CommentProps {
  id: string;
  type: 'comment' | 'reply';
  content: string;
  createdAt: number;
  score: number;
  replyingTo: string | null;
  user: UserProps;
}

interface Props {
  loggedUser: UserProps;
  comments: CommentProps[];
  isDeletingComment: boolean;
  deletingCommentID: string;
  isLoading: boolean;

  deleteComment(id: string): void;
  toggleIsDeletingComment(id: string): void;
  getCreatedAtString(date: number): string;
}

export function CommentProvider({ children }: ChildrenProps) {
  const [comments, setComments] = useState<CommentProps[]>(data.comments);
  const [loggedUser, setLoggedUser] = useState<UserProps>(data.currentUser);
  const [isDeletingComment, setIsDeletingComment] = useState(false);
  const [deletingCommentID, setDeletingCommentID] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  function deleteComment(id: string) {
    const newComments = comments.filter(comment => comment.id !== id);

    setComments(newComments);
  }

  function toggleIsDeletingComment(id: string) {
    setDeletingCommentID(id);
    setIsDeletingComment(prev => !prev);
  }

  function getCreatedAtString(date: number) {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
  }

  useEffect(() => {
    const { currentUser, comments } = data;
    const { image, username } = currentUser;

    setLoggedUser({ image, username });
    setComments(comments);
    setIsLoading(false);
  }, []);

  return (
    <CommentContext.Provider
      value={{
        comments,
        loggedUser,
        isDeletingComment,
        deletingCommentID,
        isLoading,
        deleteComment,
        toggleIsDeletingComment,
        getCreatedAtString,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export function useComment() {
  return useContext(CommentContext);
}
