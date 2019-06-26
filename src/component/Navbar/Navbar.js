import React, { Component } from 'react';
import './Navbar.css'
import Logo from '../../images/GX Icon PNG.png'
//import {Link} from 'react-router-dom'
export default class Navbar extends Component {
render()
{
return(
<div>
<div className="sticky-top">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand colorchange mobileview" href="/"><img src={Logo} className style={{width:"80px",height:"80px"}}/></a>
 
  <button className="navbar-toggler customtoggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
  
   <ul className="navbar-nav mobilenone">
	<a href="/"><img src={Logo} style={{width:"50px",height:"50px"}}/></a>
	   </ul>
	   
    <ul className="navbar-nav mx-auto centerfordesktop">
	
     
	  

      <li className="nav-item ">
        <a className="nav-link colorchange" href="/about">About</a>
      </li>

	   
	    <li className="nav-item ">
        <a className="nav-link colorchange" href="/deposite">Payment Options</a>
      </li>
	  
	   
	  	  
		 
      <li className="nav-item ">
        <a className="nav-link colorchange" href="/contact">Contact</a>
      </li>
	  
	  
                 
               
 
       
	  </ul>
	  <li style={{float:"right"}}>
	   <a href="http://stats.globalxchange.com/"> <button type="button" className="btn btn-primary buttoncolor mr-2">Login</button></a>
	   </li>
      <a href="/register"> <button type="button" className="btn btn-primary buttoncolor">Open Account</button></a>
  </div>
</nav>
</div>
</div>
)
}

}