import { ADD_TO_USER_LIST, CREATE_NEW_USER, UPDATE_USER } from "./actionConstants"


const initialState={
	userDetails:{
		userName:'',
		age:'',
		phoneNumber:'',
		address:'',
		city:''
	},
	usersRedux:[]
}

export default function userReducer(state=initialState,{type,payload}){
	switch(type){
		case CREATE_NEW_USER:
		return {
			...state,
			userDetails:{...payload},
			// users:[...users,userDetails]
		}
		case ADD_TO_USER_LIST:
			return {
				...state,
				usersRedux:[...state.usersRedux,payload]
			}
		case UPDATE_USER:
			return {
				...state,
				usersRedux:[...payload]
			}	
		default:{
			return state;
		}
	}
	
}