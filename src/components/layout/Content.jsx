import React,{Component} from 'react';
import style from '@/assets/style/style.less';
import {Router,Route,Switch} from 'react-router-dom';

/**
  *右边主体内容
**/
export default class Content extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className={style.content}>
			    {this.props.routes.map((route, index) => (
		          <Route
		            key={index}
		            path={route.path}
		            exact={route.exact}
		            component={route.main}
		          />
		        ))}
			</div>
		);
	}
}