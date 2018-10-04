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