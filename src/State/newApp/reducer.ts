import * as Types from './types';


  const initialState: Types.IStateApp = {IState: {
   applicationDate:undefined,
   applicationStatusId:undefined,
   applicationNumber:undefined,
   applicationTypeId:undefined,
   isActive:undefined,
   remark:undefined,
   stepNo:undefined,
   userId:undefined
  },
  isloading:false
}


  export function newAppReducer( state:Types.IStateApp = initialState,
    action: Types.NewAppActionsTypes):Types.IStateApp{
    switch (action.type) {



      case Types.Loading:
        return {
          ...state,
         isloading:action.payload
        }
      case Types.CreateSuccess:
        return {
          ...state,
         IState:  action.payload,
         isloading:false
        }
      case Types.IncompleteFetchSuccess:
        return {
          ...state,
         IState:  action.payload,
         isloading:false
        }
      case Types.UpdateSuccess:
        return {
          ...state,
         IState:  action.payload,
         isloading:false
        }
      default:
        return state
    }

  }

  export default newAppReducer;