import { UPDATE_USER } from "../actions/ActionUser";
import { GET_USER } from "../actions/ActionUser";
import { USER_ERROR} from "../actions/ActionUser";



export default function userReducer(state = "", { type, payload }) {
//   console.log(payload);

  switch (type) {
    case UPDATE_USER:
      return payload;
    case GET_USER:
      return payload;
   
    case USER_ERROR:
      return payload;
   
    default:
      return state;
  }
}
