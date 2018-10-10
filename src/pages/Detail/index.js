import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom' // 处理异步组件无法获取路由信息的问题

import {
	DetailWrapper,
	Header,
	Content,
	Pic
} from './style'

class Detail extends PureComponent {
	render() {
		const {
			title,
			content
		} = this.props
		return (
			<DetailWrapper>
				<Header>{title}</Header>
				<Content>
					<Pic></Pic>
					<p dangerouslySetInnerHTML={{__html: content}}></p>
				</Content>
			</DetailWrapper>
		)
	}
	componentDidMount() {
		let id = this.props
		console.log(id)
		this.props.getDetail()
	}
}

const mapState = (state) => {
	return {
		title: state.getIn(['detail', 'title']),
		content: state.getIn(['detail', 'content'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		getDetail() {
			dispatch(actionCreators.getDetail())
		}
	}
}

export default connect(mapState, mapDispatch)(withRouter(Detail))