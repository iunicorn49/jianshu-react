import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: true
})

export const toLogin = (username, password) => {
	return (dispatch) => {
		axios.get('/api/login.json').then(res => {
			const result = res.data.success
			if (result) {
				dispatch(changeLogin())
			}
		})
	}
}

export const toLogout = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: false
})