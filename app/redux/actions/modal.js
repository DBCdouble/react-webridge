import * as actionTypes from '../../constants/modal'

export function setModalVisible(state) {
	return {
		type: actionTypes.SET_MODALSTATE,
		payload:state
	}
}
