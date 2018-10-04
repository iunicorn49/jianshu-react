import React, { Component } from 'react';
import store from './store'
import { Provider } from 'react-redux'

import Header from './Layout/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header></Header>
      </Provider>
    )
  }
}

export default App;
