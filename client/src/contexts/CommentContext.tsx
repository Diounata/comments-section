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
  isLoading: boolean;

  toggleIsDeletingComment(): void;
  getCreatedAtString(date: number): string;
}

export function CommentProvider({ children }: ChildrenProps) {
  const [comments, setComments] = useState<CommentProps[]>(data.comments);
  const [loggedUser, setLoggedUser] = useState<UserProps>(data.currentUser);
  const [isDeletingComment, setIsDeletingComment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function toggleIsDeletingComment() {
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
        isLoading,
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
