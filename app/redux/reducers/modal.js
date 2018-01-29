 import * as actionTypes from '../../constants/modal'

const initialState = {
			ModalVisible: false,
			title:'add'

}

export default function modal (state = initialState, action) {
	state= state||initialState;
	switch (action.type) {
		case actionTypes.SET_MODALSTATE:
			return Object.assign({},state,action.payload)
		default:
			return state
	}

}
