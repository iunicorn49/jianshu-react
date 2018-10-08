import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { actionCreators } from './store'

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  getListArea() {
    let {
      focused,
      list,
      page,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handlePageChange,
      totalPage
    } = this.props
    if (mouseIn || focused) {
      let pageList = []
      if (list && list.size) {
        list = list.toJS()
        for (let i = ((page - 1) * 10); i < page * 10; i++) {
          list[i] && pageList.push(<SearchInfoItem key={i}>{list[i]}</SearchInfoItem>)
        }
      }
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => {handlePageChange(page, totalPage, this.spinIcon)}}>
            <i ref={icon => {this.spinIcon = icon}} className="iconfont spin">&#xe608;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { 
      focused,
      handleFocus,
      list,
      handleBlur
    } = this.props
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
                onFocus={() => {handleFocus(list)}}
                className={focused ? 'focused' : ''}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe631;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting"><i className="iconfont">&#xe7c8;</i>写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focused: state.getIn(['header', 'focused']), // 和下面是一样的结果
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispathToProps = dispatch => {
  return {
    handleFocus(list) {
     (!list.size) && dispatch(actionCreators.getList())
      dispatch(actionCreators.isFocus())
    },
    handleBlur() {
      dispatch(actionCreators.isBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handlePageChange(page, totalPage, spin) {
      page++
      if (page > totalPage) {
        page = 1
      }
      dispatch(actionCreators.changePage(page))
      // 旋转图标
      let ogDeg = spin.style.transform.replace(/[^0-9]/ig, '')
      if (ogDeg) {
        ogDeg = parseInt(ogDeg, 10)
      } else {
        ogDeg = 0
      }
      ogDeg += 360
      spin.style.transform = 'rotate(' + ogDeg + 'deg)'
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)