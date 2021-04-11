import {
    LoginActionTypes,
    AuthState,
    LOGIN_SUCCESS,
    LOGIN_LOADING,
    LOGOUT
  } from './types'
  
  const initialState: AuthState = {
    isLoggedIn:false,
    jwtToken:undefined,
    userInfo:undefined,
    isLoading:true
  }
  
  export function loginReducer(
    state:AuthState = initialState,
    action: LoginActionTypes
  ): AuthState {

    switch (action.type) {
        case LOGIN_LOADING:
        return {
         ...state,
         isLoading:true,
        }
        case LOGIN_SUCCESS:
        return {
             ...state,
             isLoggedIn:action.payload.isLoggedIn,
             isLoading:false,
             userInfo:action.payload.userInfo,
             jwtToken:action.payload.jwtToken,
             hasError:action.payload.hasError,
             message:action.payload.message

            }
            case LOGOUT:
              return {
               ...state,
               isLoggedIn:false,
               isLoading:false,
               jwtToken:undefined,
               userInfo:undefined,
               hasError:false,
               message:""
              }    
      default:
        let localStorageData:any = localStorage.getItem('user');
            if (localStorageData) {
                localStorageData = JSON.parse(localStorageData);
                return {
                    ...state,
                    isLoggedIn:true,
                    isLoading:false,
                    jwtToken:localStorageData.response.jwtToken,
                    userInfo:localStorageData.response.userInfo,
                    hasError:localStorageData.hasError,
                    message:localStorageData.message
                }
            }

            return state;
       
    }
  }

  export default loginReducer;