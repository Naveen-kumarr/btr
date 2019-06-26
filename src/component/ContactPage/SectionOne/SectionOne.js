import React, { Component } from 'react';
import './SectionOne.css'
export default class SectionTwo extends Component {
    render() {
        return (
		<div className="padddding">
		<div className="container py-5">
		<div className="row">
		<div className="col-md-6 col-sm-12">
		<form>
		
  <h3 className="pb-4">GET IN TOUCH</h3>
  
  <div class="form-row">
  
    <div class="col">
	<input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
	<div className="col-12 p-1 pt-5">
	<input type="email" className="form-control"placeholder="Email"/>
	</div>
	<div className="col-12 p-1 pt-5">
	<textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
	</div>
	<div className="col-12 p-1 pt-5 pb-5">
	<button type="button" class="btn btn-primary w-100 contactbutton">Get In Touch</button>
	</div>
  </div>
</form>
		</div>
		<div className="col-md-6 col-sm-12">
		<h3>CONTACT INFO</h3>
		<p>Our awesome team is here ready to get you trading cryptocurrencies, so what are you waiting for? Submit the form on the left with a short brief about the services you are looking for, and we will be in touch with you shortly!</p>
		<h5 className="pt-4"><i class="fas fa-envelope pr-4" aria-hidden="true"></i>contact@btrexchange.com</h5>
		<p className="pl-5">Send us your questions by email and we'll try to reply within one business day</p>
		<h5 className="pt-5"><i class="fa fa-phone pr-4" aria-hidden="true"></i>+1 778 656 2196</h5>
		<p className="pl-5">Or just make a call</p>
		</div>
		</div>
		</div>
		</div>
		)
		}
		}