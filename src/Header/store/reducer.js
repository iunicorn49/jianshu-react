import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
})

// immutable对象的set方法, 会结合之前immutable对象的值和设置的值, 返回一个全新的对象
// immutable对象中的复杂对象和数组, 皆为immutable对象, 这边更改state的时候, 传入的对象和数组, 需要先formJS转换成immutable对象

export default (state = defaultState, action) => {
	switch(action.type) {
	case actionTypes.IS_FOCUS:
		return state.set('focused', true)
	case actionTypes.IS_BLUR:
		return state.set('focused', false)
	case actionTypes.GET_LIST:
		return state.merge({ // 同时改变多个数据, 比set性能高
			list: fromJS(action.list),
			totalPage: action.totalPage
		})
	case actionTypes.MOUSE_ENTER:
		return state.set('mouseIn', true)
	case actionTypes.MOUSE_LEAVE:
		return state.set('mouseIn', false)
	case actionTypes.CHANGE_PAGE:
		return state.set('page', action.page)
	default:
		return state
	}
}