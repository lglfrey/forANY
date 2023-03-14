import { GET_POSTS_ACTION } from '../../../consts';

const initialState = {
  posts: [],
  user: {}
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_ACTION:
      return { ...state, posts: [...state.posts, action.data] };
    default:
      return state;
  }
};
