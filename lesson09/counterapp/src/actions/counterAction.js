import { DECREASE_COUNT, INCREASE_COUNT } from "./actionTypes";

export const increaseCounter=()=>{

    return{type: INCREASE_COUNT}
}

export const decreaseCounter=()=>{

    return{type: DECREASE_COUNT}
}