import React from 'react';

export default class Location extends  React.Component {
	constructor(props) {
		super(props);
		this.saveDataStep3Obj = {locationData: null};
		this.radioArr = ['berlin', 'new york', 'los angles', 'paris'];
		this.handleClick = this.handleClick.bind(this)
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.multiCall = this.multiCall.bind(this);
	}

	saveAndContinue() {
		this.props.saveDataStep3(this.saveDataStep3Obj)
	}

	handleClick(e) {
		let clickedValue = e.target.value;
	
		this.saveDataStep3Obj.locationData = (this.radioArr[e.target.value]);
		
	}

	multiCall(e) {
		e.preventDefault();
		this.saveAndContinue();
		this.props.nextStep();
	}



	render() {
		return(
			<div>
		        <h2>Basic Information</h2>
		        <div className = "space-down">location</div>
	            	<select id="mySelect" onChange={this.handleClick} className = "space-down">
	            	{this.radioArr.map((result,index) =>

						<option value={index} key={index} ref="locationData" name='locationData'>{result}</option>
	            	)}
	            	</select>
	            	<br></br>
		         <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
	             <button className="btn -primary pull-right" onClick={this.multiCall}>Save &amp; Continue</button>
		    </div>
		)
		
	}
}