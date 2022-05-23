const initialState = {
  movies: [],
  error: null,
  fetching: false,
  fetched: false,
  
};

export default function newMovieReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "NEW_MOVIES_PENDING":
      return { ...state, fetching: true, fetched: false, error: null };
    case "NEW_MOVIES_FULFILLED":
      return {
        ...state,
        movies: payload,
        fetching: false,
        fetched: true,
        error: null,
      };
    case "NEW_MOVIES_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload.response.data,
      };
    case "UPDATE_MOVIES_PENDING":
      return { ...state, fetching: true, fetched: false, error: null };
    case "UPDATE_MOVIES_FULFILLED":
      return {
        ...state,
        movie: payload,
        fetching: false,
        fetched: true,
        error: null,
      };
    case "UPDATE_MOVIES_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload.response.data,
      };
      
   

    default:
      return state;
  }
}
