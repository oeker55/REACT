import { UPDATE_USER, CREATE_USER, READ_USER, DELETE_USER} from "../actions/userAction"
export default function userReducer(state="",{type,payload}){
    switch (type) {
      case UPDATE_USER:
        return payload.user

        case CREATE_USER:
        return payload.user

        case DELETE_USER:
        return payload.user

        case READ_USER:
        return payload.user
    
    }
    return state
    
  }