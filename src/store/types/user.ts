export enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR ='FETCH_USER_ERROR',
 }

 
export interface UserState{
	users:any[];
	loading: boolean;
	error: string | null
}

 interface FetchUserAction{
	type: UserActionTypes.FETCH_USER,
}
interface FetchUserSuccesAction{
type: UserActionTypes.FETCH_USER_SUCCESS,
payload:any[]
}
		 
interface FetchUserErrorAction{
type: UserActionTypes.FETCH_USER_ERROR,
payload:string
}
	
export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccesAction