import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'

const initialState = {};

const ConfigureStore = () => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk)
	);

	return store;
}
export default ConfigureStore();
