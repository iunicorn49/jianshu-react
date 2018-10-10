import styled from 'styled-components'
import logoPic from '../statics/logo.png'

export const HeaderWrapper = styled.div`
  z-index: 1;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont.zoom {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    color: #777;
    border-radius: 15px;
    cursor: pointer;
    transition: all .3s;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  marging-left: 20px;
  font-size: 14px;
  padding: 0 37px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all .3s;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .3s;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  background: #fff;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.a.attrs({
  href: '#'
})`
  text-decoration: none;
  color: #969696;
  float: right;
  font-size: 13px;
  &:hover {
    color: #333;
  }
  .spin {
    display: block;
    float: left
    margin-right: 5px;
    font-size: 12px;
    transition: all .3s;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a.attrs({
  href: '#'
})`
  display: block;
  text-decoration: none;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius: 3px;
  &:hover {
    color: #333;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  font-size: 14px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
