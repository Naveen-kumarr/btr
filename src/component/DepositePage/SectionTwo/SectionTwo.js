import React, { Component } from 'react'
import './SectionTwo.css'
export default class Deposite extends Component {
    render() {
        return (
		<div>
		<div className="container headingg py-5">
		<div className="row">
		<div className="col-5">
		<h2>Trading Fee</h2>
		</div>
		<div className="col-7">
		<h2>0.25%</h2>
		</div>
		</div>
		</div>
		
		
		<div className="container">
		<div class="table-responsive">
		<table class="table">
  <thead>
    <tr>
      <th scope="col"><h5><strong>Deposit Methods</strong></h5></th>
      <th scope="col"><h5><strong>Min</strong></h5></th>
      <th scope="col"><h5><strong>Max</strong></h5></th>
      <th scope="col"><h5><strong>Promotional Fee</strong></h5></th>
	  <th scope="col"><h5><strong>Processing</strong></h5></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><h5>Wire CAD</h5></th>
      <td>$500</td>
      <td>$500,000</td>
      <td>1% 0.5%</td>
	  <td>1 - 2 Days</td>
    </tr>
    <tr>
      <th scope="row"><h5>E-Transfer</h5></th>
      <td>$100</td>
      <td>$10,000</td>
      <td>1% 0.5%</td>
	  <td>1 - 2 Days</td>
    </tr>
    <tr>
      <th scope="row"><h5>Interac Online</h5></th>
      <td>$5,000</td>
      <td>$100,000</td>
      <td>2.5% 1.25%</td>
	  <td>3 - 9 Days **</td>
    </tr>
  </tbody>
</table>
</div>
</div>


<div className="container py-5">
		<div class="table-responsive">
		<table class="table">
  <thead>
    <tr>
      <th scope="col"><h5><strong>Withdrawal Methods</strong></h5></th>
      <th scope="col"><h5><strong>Min</strong></h5></th>
      <th scope="col"><h5><strong>Max</strong></h5></th>
      <th scope="col"><h5><strong>Promotional Fee</strong></h5></th>
	  <th scope="col"><h5><strong>Processing</strong></h5></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><h5>Wire CAD</h5></th>
      <td>$500</td>
      <td>$500,000</td>
      <td>1% 0.5%</td>
	  <td>1 - 2 Days</td>
    </tr>
    <tr>
      <th scope="row"><h5>E-Transfer</h5></th>
      <td>$100</td>
      <td>$10,000</td>
      <td>1% 0.5%</td>
	  <td>1 - 2 Days</td>
    </tr>
  </tbody>
</table>
</div>
</div>

<div className="container py-5">
<center>
<p>* Day = Business Day</p>
<p>** + 10 day withholding period</p>
<p>Promotional Fee until August 15th</p>
</center>

</div>
		
		
		</div>
		)
		}
		}