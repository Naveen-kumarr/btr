import React, { Component } from 'react';
import './SectionOne.css'

export default class CompanyDev extends Component {
state={
data:[{id:1,date:'April 2014',description:'Our Company Founded',icon:'far fa-thumbs-up'},
{id:1,date:'April 2014',description:'First two way Bitcoin ATM in continental Europe.',icon:'fab fa-bitcoin'},
{id:1,date:'October 2014',description:'Over 2,300 multifunctional trade terminals in partnerships.',icon:'fas fa-handshake'},
{id:1,date:'February 2016',description:'Biggest crypto exchange broker in Romania and one of the largest in EU.',icon:'fas fa-user'},
{id:1,date:'June 2016',description:'The online platform launched serving over 30,000 satisfied customers and growing.',icon:'far fa-thumbs-up'},
{id:1,date:'May 2017',description:'Successfully raised 235,000 Euro on bnktothefuture.com being evaluated at 3,5 million Euro.',icon:'fab fa-bitcoin'},
{id:1,date:'July 2017',description:'BTR Exchange online platform launched now serving Canada.',icon:'fas fa-handshake'},
{id:1,date:'July 2018',description:'Seed Round Capitalization and Canadian team built',icon:'far fa-thumbs-up'},

]
}

render() {
return (
<div className="changebackground">
<div className="container">
<div style={{textAlign:"center"}}>
<h4 className="pb-4">DEVELOPMENT OF OUR COMPANY</h4>
</div>
<div className="row pb-5">
{this.state.data.map(item =>{
return(
<div className="col-md-3 col-sm-6 col-xs-6 ">
<div className="card box-about">
<div className="card-body" style={{textAlign:"center"}}>
<div className="icon">
<i className={item.icon}></i>
</div>
<h5>{item.date}</h5>
<p>{item.description}</p>
</div>
</div>
</div>
)
})}
</div>
</div>
</div>

)
}
}