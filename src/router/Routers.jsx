import React,{Component} from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import Login from '@/views/login/Login';
import Layout from '@/components/layout/Layout';
import history from './history';

export default class Routers extends Component{

   constructor(props){
   	  super(props);
   }

    render(){
        return (
            <Router history={history}>
                <Switch>
                   <Route path={"/login"} component={Login}/>
                   <Route path={"/home"} component={Layout}/>
                </Switch>
            </Router>
        );
    }
}