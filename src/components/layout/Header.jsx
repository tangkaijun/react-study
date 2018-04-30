import React,{Component} from 'react';
import style from '@/assets/style/style.less';

/**
 * 顶部标题栏
 *
 */
export default class Header extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className={style.header}>
				header
			</div>
		);
	}

}