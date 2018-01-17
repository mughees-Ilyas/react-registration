import React from "react";

import AccountFields from './accountFields.js';
import SurveyFields from './surveyFields.js';
import Confirmation from './confirmation.js';
import Success from './success.js';
import Location from './location.js';

export default class Registration extends React.Component {
	constructor() {
		super();
		this.state = ({step: 1});
		this.nextStep = this.nextStep.bind(this);
		this.saveValue = this.saveValue.bind(this);
		this.previousStep = this.previousStep.bind(this);
		this.saveDataStep2 = this.saveDataStep2.bind(this);
		this.saveDataStep3 = this.saveDataStep3.bind(this);

		 this.fieldValues =  {
		 		name     : null,
		 		email    : null,
		 		password : null,
		 		age      : null,
		 		colors   : []
		 	}
	}

	saveValue(fields) {
		this.setState({fieldValuesStore: fields})
	}

	saveDataStep2(obj) {
		this.setState({saveDataStep2Obj: obj});

	}
	saveDataStep3(obj) {
		this.setState({saveDataStep3Obj: obj});

	}

	nextStep() {
		this.setState({
			step : this.state.step + 1
		})
	}
	previousStep() {
		this.setState({
			step : this.state.step - 1
		})
	}

	render() {
		switch (this.state.step) {
			case 1:
				return <AccountFields fieldValues={this.fieldValues} saveValue={this.saveValue} nextStep={this.nextStep} />
			case 2:
				return <SurveyFields saveDataStep2={this.saveDataStep2} saveValue={this.saveValue} nextStep={this.nextStep} previousStep={this.previousStep} />
			case 3:
				return <Location saveDataStep3={this.saveDataStep3} saveValue={this.saveValue} nextStep={this.nextStep} previousStep={this.previousStep} />
			case 4:
				return <Confirmation saveDataStep2Obj={this.state.saveDataStep2Obj} saveDataStep3Obj={this.state.saveDataStep3Obj} fieldValuesStore={this.state.fieldValuesStore} saveValue={this.saveValue} nextStep={this.nextStep} previousStep={this.previousStep}/>
			case 5:
				return <Success  fieldValuesStore={this.state.fieldValuesStore} saveValue={this.saveValue} nextStep={this.nextStep}  />
		}
	}
}
