 import * as actionTypes from '../../constants/table'

const initialState = {
	data:[]
}

export default function table (state = initialState, action) {
	state= state||initialState;
	switch (action.type) {
		case actionTypes.GET_DATA:
			return Object.assign({},state,action.payload)
		default:
			return state
	}
}
