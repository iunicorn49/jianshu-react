import React, { PureComponent } from 'react'
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style'

import { connect } from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

/** 
 * 由于用了 connect 方法, 只要store中个任何一个数据发生改变, 这个组件包括子组件都会重新渲染.
 * 通过 shouldComponentUpdate 这个生命周期函数可以解决这个问题.
 * PureComponent 纯组件, 自带一个 shouldComponentUpdate 的实现.
 */
class Home extends PureComponent {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{
					this.props.showTop ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
				}
			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.bindEvents()
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changTopOn)
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changTopOn)
	}
	handleScrollTop() {
		window.scrollTo(0, 0)
	}
}

const mapStateToProps = state => {
	return {
		showTop: state.getIn(['home', 'showTop'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		changTopOn() {
			if (document.documentElement.scrollTop > 300) {
				dispatch({
					type: 'showTopOn'
				})
			} else {
				dispatch({
					type: 'showTopOff'
				})
			}
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Home)