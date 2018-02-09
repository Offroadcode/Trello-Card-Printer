import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducers from './reducers';

const promise = () => (next) => (action) => {
	if (typeof action.then === 'function') {
		return action.then(next);
	}
	return next(action);
};

const logger = (store) => (next) => (action) => {
	// Basic logger for debugging - TODO: disable for PROD
	console.group(action.type);
	console.log('%c prev state', 'color:gray', store.getState());
	console.log('%c action', 'color:blue', action);

	const result = next(action);

	// Again, disable console before PROD.
	console.log('%c next state', 'color:green', store.getState());
	console.groupEnd(action.type);

	return result;
};

var initialState = {
};

const configureStore = () => {
	return createStore(appReducers, initialState, applyMiddleware(thunkMiddleware, logger));
};

export default configureStore;
