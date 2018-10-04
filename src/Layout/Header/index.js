import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { actionCreators } from './store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

const Header = props => {
  const { 
    focused,
    handleFocus,
    handleBlur
  } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={300}
            classNames="slide"
          >
            <NavSearch
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={focused ? 'focused' : ''}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting"><i className="iconfont">&#xe7c8;</i>写文章</Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']) // 和下面是一样的结果
    // focused: state.get('header').get('focused')
  }
}

const mapDispathToProps = dispatch => {
  return {
    handleFocus() {
      const action = actionCreators.isFocus()
      dispatch(action)
    },
    handleBlur() {
      const action = actionCreators.isBlur()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)