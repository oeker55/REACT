// export const  FETCH_MOVIES_GET = "FETCH_MOVIES_GET"
// export const  FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR"

const initialState = {
  movies: [],
  error: null,
  fetching: false,
  fetched: false,
  movie: {},
  deletedMovie:null
};

export default function movieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_MOVIES_PENDING":
      return { ...state, fetching: true, fetched: false, error: null };
    case "FETCH_MOVIES_FULFILLED":
      return {
        ...state,
        movies: payload,
        movie: payload,
        fetching: false,
        fetched: true,
        error: null,
      };
    case "FETCH_MOVIES_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload.response.data,
      };
    case "GET_MOVIE_PENDING":
      return { ...state, fetching: true, fetched: false, error: null };
    case "GET_MOVIE_FULFILLED":
      return {
        ...state,
        movie: payload,
        fetching: false,
        fetched: true,
        error: null,
      };
    case "GET_MOVIE_REJECTED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: payload.response.data,
      };
      case "DELETE_MOVIE_PENDING":
        return { ...state, fetching: true, fetched: false, error: null };
      case "DELETE_MOVIE_FULFILLED":
        return {
          ...state,
          deletedMovie: payload,
          fetching: false,
          fetched: true,
          error: null,
          movies: state.movies.filter(item=>item.id !== payload)
        };
      case "DELETE_MOVIE_REJECTED":
        return {
          ...state,
          deletedMovie: {},
          fetching: false,
          fetched: false,
          error: payload.response.data,
        };

    default:
      return state;
  }
}
