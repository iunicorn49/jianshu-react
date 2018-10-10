# React-Note

## 工具

### styled-components

> 模块化css样式工具, 并且是将css样式写在js文件中.

```javascript
import { injectGlobal } from 'styled-components'

// 全局样式
injectGlobal`
  body {
    background: #ff5d5d;
  }
`
```

### immutable

> 避免不小心改变state中的数据.

#### redux-immutable

> 让state本身变成immutable对象.

### redux

> 公共状态管理工具.

#### react-redux

> 让redux在react项目中可以更方便的使用.

#### reducer

> 公共状态管理模块化, 可以做到功能拆分.

### react-router-dom

> 路由.

```javascript
import { BrowserRouter, Route } from 'react-router-dom'

// BrowserRouter下只能由一个元素, 需要用div包裹住多个Route
<BrowserRouter>
  <div>
    <Route path='/' exact render={() => <div>home</div>}></Route>
    <Route path='/detail' exact render={() => <div>detail</div>}></Route>
  </div>
</BrowserRouter>
```

### PureComponent

> 由于用了 connect 方法, 只要store中个任何一个数据发生改变, 这个组件包括子组件都会重新渲染.
> 通过 shouldComponentUpdate 这个生命周期函数可以解决这个问题.
> PureComponent 纯组件, 自带一个 shouldComponentUpdate 的实现.
> 必须配合 immutable 进行使用.

```javascript
import React, { PureComponent } from 'react'

class Home extends PureComponent {
  render() {

  }
}

export default Home
```

### dangerouslySetInnerHTML

> 可以解读HTML标签.

```javascript
render () {
  let { content } = this.props
  return (
    <p dangerouslySetInnerHTML={{__html: content}}>
      {
        // 里面不用添加内容, 由上方的__html引入
      }
    </p>
  )
}
```

### react-loadable

> react异步组件.