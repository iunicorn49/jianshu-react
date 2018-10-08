import * as actionTypes from './actionTypes'
import axios from 'axios'

export const isFocus = () => ({
	type: actionTypes.IS_FOCUS
})

export const isBlur = () => ({
	type: actionTypes.IS_BLUR
})

const changeList = res => ({
	type: actionTypes.GET_LIST,
	list: res.data,
	totalPage: Math.ceil(res.data.length / 10)
})

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/getList.json').then(res => {
			let r = res.data
			if (r.status === 0) {
				dispatch(changeList(r))
			}
		}).catch(err => console.error(err))
	}	
}

export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE
})

export const changePage = page => ({
	type: actionTypes.CHANGE_PAGE,
	page
})