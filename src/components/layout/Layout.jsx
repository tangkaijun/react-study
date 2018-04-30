import React,{Component} from 'react';
import Header from './Header';
import Sider from './Sider';
import Footer from './Footer';
import Content from './Content';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from '@/router/routes';

export default class Layout extends Component{

	constructor(props){
		super(props);
        this.state = {
            openKey: "sub1",
            activeKey: "menu101",
            collapsed: false,
            mode: 'inline'
        }
	}

    render(){
    	return (
    		<div>
    			<Header />
                 <Router>
    			   <div>
    				<Sider />
    				<Content routes={routes}/>
    			   </div>
                 </Router>
    			<Footer />
    		</div>
    	);
    }

}