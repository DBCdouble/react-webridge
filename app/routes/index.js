import React,{Component} from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import App from '../containers/App';
import 'antd/dist/antd.css';

export default class Root extends Component{
	
	render(){
		return (
			<div>
		
					<Router history={this.props.history}>
									<Route path="/" component={App} />
					</Router>
			
			
			</div>
		)
	}
}

