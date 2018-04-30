import React,{Component} from 'react';
import style from '@/assets/style/style.less';
import {Link} from 'react-router-dom';

export default class Sider extends Component{

	constructor(props){
		super(props);
		this. state = {
			    openKey: "sub1",
			    activeKey: "menu101",
			    collapsed: false,
			    mode: 'inline',
         }
	}

	render(){
		return (
			<div className={style.sider}>
			    <ul>
			    	<li>React路由管理
			    	  <ul>
			    		{/**<li><Link to="/user">用户管理</Link> </li>*/}
			    		<li><Link to="/route/about">React路由介绍</Link></li>
			    	  </ul>
			    	</li>
			    	<li>第二章 React路由</li>
			    </ul>
			</div>
		);
	}

}