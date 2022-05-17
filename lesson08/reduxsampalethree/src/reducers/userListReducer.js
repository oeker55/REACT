const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
  };
  
  export default function userListReducer(state = initialState, { type, payload }) {
    switch (type) {
      case "USERS_PENDING":
        return { ...state, fetching: true, fetched: false, users: [], error: null};
  
      case "USERS_FULFILLED":
        return { ...state, fetching: false, fetched:true, users:payload, error:null,};
        
      case "USERS_REJECTED":
        return { ...state, fetching: false, fetched: false, users: [], error:payload};
  
      default:
        return state;
    }
  }
  