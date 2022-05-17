const initialState = {
  fetching: false,
  fetched: false,
  posts: [],
  error: null,
};

export default function postsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_POSTS_START":
      return { ...state, fetching: true, fetched: false, posts: [], error: null};

    case "FETCH_POSTS_RECEIVE":
      return { ...state, fetching: false, fetched:true, posts:payload, error:null,};
      
    case "FETCH_POSTS_ERROR":
      return { ...state, fetching: false, fetched: false, posts: [], error:payload};

    default:
      return state;
  }
}
