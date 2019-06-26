import React, { Component } from 'react';
import axios from 'axios';
import './SectionOne.css'
import Market from './Chart'
export default class SectionOne extends Component {
	state={
		data:[]
	}
	APICALL = () =>{
		axios.get('https://api.coinlayer.com/live?access_key=e03653aa09b1c23c0474d4df8e08595b')
		.then(res => 
		{
			this.setState({
				data:res.data.rates
			})
		})	
	}
	componentDidMount (){
		this.APICALL();
	}
	
render() {
	let n = typeof(this.state.data.BTC)
	console.log(n)
return (
<div>

<div className="backgroundc">
<div className="container">
<div className="row">

<div className="col-md-6 col-sm-12">
<center>
<h1 className="textweight">Buy Bitcoin In Seconds</h1>
<p className="subtitle">GXBroker is the easiest way to get cryptocurrency today.</p>
</center>
<div className="assets">
<form class="form-inline content11">
  <div class="form-group mx-sm-3 mb-2">
    
    <input type="number" class="form-control border" id="inputPassword2" placeholder="+919876543210"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2 mobilebutton buttoncolorr">Get Started</button>
</form>
</div>
</div>

<div className="col-md-6 col-sm-12">
<center>
<p>BTC/USD</p>
<h1 className="textweight">${parseFloat(this.state.data.BTC).toFixed(2)}</h1>
</center>
<Market/>
</div>
</div>



<p className="forbottom"></p>
</div>
</div>
</div>
)
}
}