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

export interface StateProps {
  loggedUser: UserProps;
  comments: CommentProps[];
  isDeletingComment: boolean;
  deletingCommentID: string;
  isLoading: boolean;
}

interface DeleteCommentAction {
  type: 'DELETE_COMMENT';
  payload?: {};
}

interface ToggleIsDeletingCommentAction {
  type: 'TOGGLE_IS_DELETING_COMMENT';
  payload: { id: string };
}

interface ToggleIsLoadingAction {
  type: 'TOGGLE_IS_LOADING';
  payload: { value: boolean };
}

export type ActionProps =
  | DeleteCommentAction
  | ToggleIsDeletingCommentAction
  | ToggleIsLoadingAction;

export function commentReducer(state: StateProps, { type, payload }: ActionProps): StateProps {
  switch (type) {
    case 'TOGGLE_IS_DELETING_COMMENT':
      return {
        ...state,
        deletingCommentID: payload.id,
        isDeletingComment: !state.isDeletingComment,
      };

    case 'TOGGLE_IS_LOADING':
      return { ...state, isLoading: payload.value };

    case 'DELETE_COMMENT':
      return {
        ...state,
        deletingCommentID: '',
        isDeletingComment: false,
        comments: state.comments.filter(comment => comment.id !== state.deletingCommentID),
      };

    default:
      return state;
  }
}
