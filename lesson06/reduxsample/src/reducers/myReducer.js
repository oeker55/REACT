export default function myReducer(state, action){
    // console.log("state",state,"action",action)
    
    if (action.type === "Change the State") {
      return action.payload.newState;
    }
    
    return "State";
  };