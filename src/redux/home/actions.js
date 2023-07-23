import * as types from "./types";

export const Login = data=>{
      let userstatus='';
      try {
            
            if(data.user==='admin' && data.pass==='12345'){
                  userstatus='login'
            }
            else{
                  userstatus='not log'

            }
      } catch (error) {
             console.log(error);
            }


            return{
                  type:types.UserLogin,
                  payload:userstatus
            }
}