import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
	ListItem,
	ListInfo
} from './style'

class List extends PureComponent {

	render() {
		let { articleList } = this.props
		return (
			<div>
				{
					articleList.map(item => {
						return (
							<Link to={'/Detail/' + item.get('id')} key={item.get('id')}>
								<ListItem>
									<img alt='' src={item.get('imgUrl')} />
									<ListInfo>
										<h3>{item.get('title')}</h3>
										<p>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
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