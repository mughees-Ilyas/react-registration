import React from 'react';

export default class SurveyFields extends  React.Component {
	constructor(props) {
		super(props);
		this.saveDataStep2Obj = {age: null, colors: []};
		this.radioArr = ['18-26', '27-38', '39-50', '51-62'];
		this.checkboxArr = ['sports', 'gaming', 'reading', 'cooking'];
		this.handleClick = this.handleClick.bind(this)
		this.saveAndContinue = this.saveAndContinue.bind(this);
		this.multiCall = this.multiCall.bind(this);
	}

	saveAndContinue() {
		this.props.saveDataStep2(this.saveDataStep2Obj)
	}

	handleClick(e) {
		let clickedValue = e.target.value;
		if(e.target.type === 'radio') {
			this.saveDataStep2Obj.age = clickedValue;
		} else {
			this.saveDataStep2Obj.colors.push(clickedValue);
		}
		
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
		        <ul className="form-fields">
		          	<li className="radio">
		            	<span>Age</span><br/>
		            	{this.radioArr.map((result,index) => 
		            		<label key={index} className = "space-between">
		            			<input type="radio" onClick={this.handleClick} value={result} ref="age" name='age' /> {result}
		            		</label>
		            	)}
		        	</li>

		        	<li className="checkbox">
	    	            <span >activities</span><br/>
	    	            {this.checkboxArr.map((result, index) =>
	    	            	<label key={index} className = "space-between">
	    	            		<input type="checkbox" onClick={this.handleClick} ref={result} value={result} /> {result}
	    	            	</label>
	    	            )}
	    	         </li>
	    	         <br></br>

	    	        <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
	                <button className="btn -primary pull-right" onClick={this.multiCall}>Save &amp; Continue</button>
		          
		        </ul>
		    </div>
		)
		
	}
}