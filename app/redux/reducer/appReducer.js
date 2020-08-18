import * as actionTypes from '../action/actionTypes'

const initialState = {
	animals: [],
	names: [],
};


export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_ANIMAL:
			return {...state, animals: [...state.animals, action.data]};

		case actionTypes.REMOVE_ANIMAL:
			let animals = [...state.animals].filter(item => {
				return item !== action.data
			});
			return {...state, animals: animals};

		case actionTypes.ADD_NAME:
			return {...state, names: [...state.names, action.data]};

		case actionTypes.REMOVE_NAME:
			let newNames = [...state.names].filter(item => {
				return item !== action.data
			});
			return {...state, names: newNames};

		default:
			return state;
	}
}
