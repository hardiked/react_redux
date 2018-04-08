import {REGISTER_USER,SET_LOAD,LOGIN_USER} from '../actions/types';

const initialState={
	data:{},
	token:"",
	loading:false
}

export default function(state=initialState,action){
	switch(action.type){
		case REGISTER_USER:
			return{
				data:action.payload,
				token:"",
				loading:false
			}
		case SET_LOAD:
			return{
				...state,
				data:{message:""},
				loading:true
			}
		case LOGIN_USER:
			return{
				...state,
				token:action.payload.token,
				data:action.payload,
				loading:false
			}
		default:
			return state;
	}
}