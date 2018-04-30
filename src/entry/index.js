import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import Layout from '@/components/layout/Layout';
import Routers from '@/router/Routers';
import 'bootstrap/dist/css/bootstrap.min.css';


render(<Routers />,document.getElementById("root"));