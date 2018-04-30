import React,{Component} from 'react';
import style from '@/views/login/Login.less';
import history from '../../router/history';

export default class Login extends Component{

     constructor(props){
     	super(props);
     	this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleSubmit=()=>{
     	 history.push("/home")
     }

     render=()=>{
     	return (
          <div className="container">  
	          <div className="form row">  
	            <form className="form-horizontal col-sm-offset-3 col-md-offset-3" >  
	                <h3 className="form-title">用户登录</h3>  
	                <div className="col-md-9">  
	                    <div className="form-group">  
	                        <i className="fa fa-user fa-lg"></i>  
	                        <input className="form-control required" type="text" placeholder="用户名" name="username"/>  
	                    </div>  
	                    <div className="form-group">  
	                            <i className="fa fa-lock fa-lg"></i>  
	                            <input className="form-control required" type="password" placeholder="密码" name="password"/>  
	                    </div>  
	                    <div className="form-group">  
	                        <label className="checkbox">  
	                            <input type="checkbox" name="remember" value="1"/> 记住密码 
	                        </label>  
	                        <hr />  
	                        <a href="javascript:;" id="register_btn" className="">Create an account</a>  
	                    </div>  
	                    <div className="form-group">  
	                        <input type="button" onClick={this.handleSubmit} className="btn btn-success pull-right" value="Login "/>     
	                    </div>  
	                </div>  
	            </form>  
	        </div>  
        </div>
     	);
     }
}