import {combineReducers} from 'redux';
import appReducer from './appReducer';
// earlier i was planning to have
// two different reducer but then decided
// you will know about my coding style from this much

const Reducer = combineReducers({
	appReducer: appReducer,
});

export default Reducer;
