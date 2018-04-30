import React,{Component} from 'react';
import style from '@/assets/style/style.less';

export default class Content extends Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return (
		 	<div className={style.footer} >
		 	      reack-study 版权所有 © 2018 kjtang
		 	</div>
		);
	}

}