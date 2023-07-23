import { combineReducers } from "redux";
import { UserLogin } from "./types"

const init={
      user:''
}

const reducer=(state=init,action)=>{
      switch(action.type){
            case UserLogin:
                  return{
                        ...state,
                        user:action.payload

                  }
            default:return state;
      }

}


const RootReducer=combineReducers({getUser:reducer})
export default RootReducer;