import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
	title: '',
	content: ''
})

const setDetail = (state, action) => {
	return state.merge({
		title: action.title,
		content: action.content
	})
}

export default (state = defaultState, action) => {
	switch(action.type) {
	case actionTypes.GET_DETAIL:
		return setDetail(state, action)
	default:
		return state	
	}
}