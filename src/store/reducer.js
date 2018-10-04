import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../Layout/Header/store'

export default combineReducers({
	header: headerReducer
})