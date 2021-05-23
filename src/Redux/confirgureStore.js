import { createStore } from 'redux'
import userReducer from './reducer'

export function configureStore(){
	const store = createStore(userReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

	return store;
}