import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getDetail = () => {
	return (dispatch) => {
		axios.get('/api/detail.json').then(res => {
			dispatch(changeDetail(res.data.data))
		})
	}
}

const changeDetail = (data) => ({
	type: actionTypes.GET_DETAIL,
	title: data.title,
	content: data.content
})