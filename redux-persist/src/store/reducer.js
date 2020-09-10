import { GET_VALUE } from "./action"

let initialState={
    data:[]
}

export default (state=initialState, action)=>{
    switch(action.type){
        case GET_VALUE:
          return{
              ...state,
              data:[...state.data, action.payload]
          }
        default:
            return state;  
    }
}