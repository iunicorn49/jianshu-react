import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'

import {
	LoginWrapper,
	LoginBox,
	Input,
	Button,
} from './style'

class Login extends PureComponent {
	render() {
		const {
			toLogin,
			login
		} = this.props
		if (login) {
			return <Redirect to='/' />
		} else {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input innerRef={(input) => {this.username = input}} placeholder='账号' />
						<Input innerRef={(input) => {this.password = input}} placeholder='密码' type='password' />
						<Button onClick={() => {toLogin(this.username, this.password)}}>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}
	}
}

const mapState = (state) => {
	return {
		login: state.getIn(['login', 'login'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		toLogin(username, password) {
			username = username.value
			password = password.value
			dispatch(actionCreators.toLogin(username, password))
		}
	}
}

export default connect(mapState, mapDispatch)(Login)