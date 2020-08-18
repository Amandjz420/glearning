import {ADD_ANIMAL, REMOVE_ANIMAL, ADD_NAME, REMOVE_NAME} from './actionTypes';

export const addFromList = (data, type) => dispatch => {
	dispatch({
		data: data,
		type: type === "animals" ? ADD_ANIMAL : ADD_NAME
	})
};

export const removeFromList = (data, type) => dispatch => {
	dispatch({
		data: data,
		type: type === "animals" ? REMOVE_ANIMAL : REMOVE_NAME
	})
};
