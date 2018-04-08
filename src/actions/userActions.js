import {REGISTER_USER,SET_LOAD,LOGIN_USER} from './types';

export const registerUser=(data)=>(dispatch)=>{
	return new Promise((resolve) => {
      	setTimeout(() => {
        	fetch('/api/users',{
				method: 'POST',
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			.then(res => res.json())
			.then(data => dispatch({
				type: REGISTER_USER,
				payload: data
			}));
        	resolve()
      	}, 2000)
    })
}

export const setLoad=()=>(dispatch)=>{
	return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
			type: SET_LOAD,
			payload: true
		})
        resolve()
      }, 200)
    })
}

export const loginUser=(data)=>(dispatch)=>{
	return new Promise((resolve) => {
      	setTimeout(() => {
        	fetch('/api/authenticate',{
				method: 'POST',
				headers:{
					'content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			.then(res => res.json())
			.then(data => dispatch({
				type: LOGIN_USER,
				payload: data
			})).then(()=>resolve())
        	// resolve()
      	}, 1)
    })
}