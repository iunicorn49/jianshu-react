import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer } from '../Header/store'
import { reducer as homeReducer } from '../pages/Home/store'
import { reducer as DetailReducer } from '../pages/Detail/store'
import { reducer as LoginReducer } from '../pages/Login/store'

export default combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: DetailReducer,
	login: LoginReducer
})