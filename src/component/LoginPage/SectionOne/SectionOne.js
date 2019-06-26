import React, { Component } from 'react'
import './SectionOne.css'

export default class login extends Component {
render() {
return (
<div className="parent">
<div className="content" >
<div className="border border-white b1">

<h3 className="heading-40">Welcome Back!</h3>
<div className="heading2">Login to your account</div>
<div className="form">

<div className="form-group">
<label for="exampleInputEmail1">Email address</label>
< input type="email" className="form-control" id="exampleInputEmail1" 
placeholder="Enter email"/>
</div>


<div className="form-group">
< label for="exampleInputPassword1">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>


</div>
<div className="pb-2"> <button type="submit" className="btn btn-primary b2 w-100">Log in</button></div>
<strong class="bold-text-3">Forgot Password?</strong>
</div>

</div>

</div> 
</div>

)
}
}