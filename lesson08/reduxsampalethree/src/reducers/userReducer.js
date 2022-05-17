export default function userReducer(state=" ", {type, payload}){

switch (type) {
    case "ADD_USER":
        
        return payload.name;
    default:
        return state;
}


}