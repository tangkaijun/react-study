import React,{Component} from 'react';
import Header from './Header.jsx';
import Sider from './Sider.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export default class Layout extends Component{

	constructor(props){
		super(props);
	}

    render(){
    	return (
    		<div className="container">
    			<Header />
    			<div>
    				<Sider />
    				<Content />
    			</div>
    			<Footer />
    		</div>
    	);
    }

}