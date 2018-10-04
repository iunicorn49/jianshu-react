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

