import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../Header/store'

export default combineReducers({
	header: headerReducer
})