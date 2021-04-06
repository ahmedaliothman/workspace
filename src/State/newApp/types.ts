

import {INewAppState} from "../../types/newApp"

export interface IState extends INewAppState{

}

export interface IStateApp {
    IState:IState,
    isloading:boolean
}



export const ClearRequst = 'NEWAPP/CLEAR';
export interface ClearActionType {
    type: typeof ClearRequst
}


export const GetRequest = 'NEWAPP/GET';
export interface GetRequestActionType {
    type: typeof GetRequest,
    payload:number
}


export const RequestLoading = 'NEWAPP/REQUESTLOADING';

export interface RequestLoadingActionType {
    type: typeof RequestLoading,
    payload:boolean
}

export const Loading = 'NEWAPP/LOADING';

export interface LoadingActionType {
    type: typeof Loading,
    payload:boolean
}


export const CreateRequest = 'NEWAPP/CREATE';
export interface CreateRequestActionType {
    type: typeof CreateRequest,
    payload:IState
}

export const CreateSuccess = 'NEWAPP/CREATE_SUCCESS';
export interface CreateSuccessActionType {
    type: typeof CreateSuccess,
    payload:IState
}

export const IncompleteFetchRequest = 'NEWAPP/FETCH';
export interface FetchIncompleteActionType {
    type: typeof IncompleteFetchRequest,
    payload:number
}

export const IncompleteFetchSuccess = 'NEWAPP/FETCH_SUCCESS';
export interface IncompleteFetchSuccessActionType {
    type: typeof IncompleteFetchSuccess,
    payload:IState
}

export const UpdateRequest = 'NEWAPP/UPDATE';
export interface UpdateActionType {
    type: typeof UpdateRequest,
    payload:IState
}

export const UpdateSuccess = 'NEWAPP/UPDATE_SUCCESS';
export interface UpdateSuccessActionType {
    type: typeof UpdateSuccess,
    payload:IState
}




export type NewAppActionsTypes =CreateRequestActionType|CreateSuccessActionType|
                                FetchIncompleteActionType|IncompleteFetchSuccessActionType|
                                UpdateActionType|UpdateSuccessActionType|LoadingActionType;



