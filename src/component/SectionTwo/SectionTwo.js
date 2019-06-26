import React, { Component } from 'react';
import Logo from '../../images/GX Icon PNG.png'
import './SectionTwo.css'
export default class SectionTwo extends Component {
    render() {
        return (
		<div className="parentdivv" style={{backgroundColor:"#f8f9fa"}}>
		<div className="childdivv">
            <div className="container py-5 newdesign">
                <div className="row modify">
                    <div className="col-4">
                        {/* <h5 className="text-muted">BTR EXCHANGE</h5> */}
                        <img style={{width:"50px",height:"50px"}} src={Logo} alt=""/>
                        <h6 className="pt-3">+91-9876543210</h6>
                    </div>
                    <div className="col-4">
                        <h5>Funding Options</h5>
                        <a href="/deposite"><h6 className="text-muted pt-3">Deposit</h6></a>
                         <a href="/withdraw"><h6 className="text-muted pt-2">Withdrawl</h6></a>
                    </div>
                    <div className="col-4">
                        <h5>Company</h5>
                         <a href="/about"><h6 className="text-muted pt-3">About</h6></a>
                         <a href="/contact"><h6 className="text-muted pt-2">Contacts</h6></a>
                        <a href="/terms"><h6 className="text-muted pt-2">Terms</h6></a>
                    </div>

                </div>
            </div>
			</div>
			</div>
        )
    }
}