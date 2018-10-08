import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
	ListItem,
	ListInfo
} from './style'

class List extends Component {

	render() {
		let { articleList } = this.props
		return (
			<div>
				{
					articleList.map(item => {
						return (
							<ListItem key={item.get('id')}>
								<img alt='' src={item.get('imgUrl')} />
								<ListInfo>
									<h3>{item.get('title')}</h3>
									<p>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						)
					})
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		articleList: state.getIn(['home', 'articleList'])
	}
}

export default connect(mapStateToProps)(List)