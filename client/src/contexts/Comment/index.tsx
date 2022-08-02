import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { formatDistance } from 'date-fns';

import { commentReducer, StateProps, ActionProps } from './commentReducer';
import { initialState } from './initialState';

const CommentContext = createContext({} as Props);

interface ChildrenProps {
  children: ReactNode;
}

interface Props extends StateProps {
  dispatch: React.Dispatch<ActionProps>;

  getCreatedAtString(date: number): string;
}

export function CommentProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(commentReducer, initialState);

  function getCreatedAtString(date: number) {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
  }

  useEffect(() => {
    dispatch({ type: 'TOGGLE_IS_LOADING', payload: { value: false } });
  }, []);

  return (
    <CommentContext.Provider value={{ ...state, dispatch, getCreatedAtString }}>
      {children}
    </CommentContext.Provider>
  );
}

export function useComment() {
  return useContext(CommentContext);
}
