import { ADD_TO_USER_LIST, CREATE_NEW_USER, UPDATE_USER } from "./actionConstants";

export function createUser(details){
	return{
		type:CREATE_NEW_USER,
		payload:details
	}
}

export function addToUserList(details){
	return{
		type:ADD_TO_USER_LIST,
		payload:details
	}
}

export function updateUserRedux(details){
	return{
		type:UPDATE_USER,
		payload:details
	}
}