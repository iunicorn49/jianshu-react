import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../Header/store'
import { reducer as homeReducer } from '../pages/Home/store'

export default combineReducers({
	header: headerReducer,
	home: homeReducer
})