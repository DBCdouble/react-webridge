import React,{Component} from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Routes from './routes/index';

// 创建 Redux 的 store 对象
const store = configureStore();

render(
<Provider store={store}>
    <Routes history={hashHistory}/>
</Provider>, document.getElementById('root'))
