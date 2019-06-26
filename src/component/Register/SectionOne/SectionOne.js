import React, { Component } from 'react'
import './SectionOne.css'

export default class login extends Component {
render() {
return (
<div className="parent11">
<div className="content" >
<div className="border border-white b1">

<h3 className="heading-40">Register with BTR Exchange</h3>
<div className="heading2">Fill out the form to start trading today</div>
<div className="form">

<div className="form-group">
<label for="exampleInputEmail1">Name</label>
< input type="text" className="form-control" id="exampleInputEmail1" 
placeholder="Enter Full Name"/>
</div>


<div className="form-group">
< label for="exampleInputPassword1">Email</label>
<input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Email"/>


</div>

<div className="form-group">
< label for="exampleInputPassword1">Phone No.</label>
<input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Phone"/>


</div>

<div className="form-group">
< label for="exampleInputPassword1">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>


</div>


<div className="form-group">
< label for="exampleInputPassword1">Confirm Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>


</div>

<div className="pb-2"> <button type="submit" className="btn btn-primary b2 w-100">Submit</button></div>
</div>

</div>

</div> 
</div>

)
}
}