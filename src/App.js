import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js';
import { GlobalFontsStyle } from'./static/iconfont/iconfont.js';
import store from './store';
import Header from './common/header';
class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div>
                    <GlobalStyle/>
                    <GlobalFontsStyle/>
                    <Header/>
                </div>
            </Provider>
        )
    }
}

export default App;
