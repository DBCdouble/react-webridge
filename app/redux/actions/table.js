import * as actionTypes from '../../constants/table';

export function getData(data){
	return{
		type: actionTypes.GET_DATA,
		payload:data
	}
}
