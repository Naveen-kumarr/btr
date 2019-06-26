import React, { Component } from 'react'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './component/Home'
import Contact from './component/ContactPage/Contact'
import About from './component/AboutPage/About'
import Register from './component/Register/Register'
import Login from './component/LoginPage/Login'
import Footer from './component/Footer/Footer'
import Deposite from './component/DepositePage/Deposite'
import Terms from './component/Terms/Terms'
import Error from './component/Error'
export default class Firstsec extends Component {
    render() {
        return (
		<div>
		<Navbar/>
		<Router>
		<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/about" exact component={About}/>
		<Route path="/contact" exact component={Contact}/>
		<Route path="/register" exact component={Register}/>
		<Route path="/login" exact component={Login}/>
		<Route path="/deposite" exact component={Deposite}/>
		<Route path="/withdraw" exact component={Deposite}/>
		<Route path="/terms" exact component={Terms}/>
		<Route component={Error}/>
		</Switch>
		</Router>
		<Footer/>
		
		</div>
		)
	}
}