import React from 'react';
import '../App.css';

export default class AccountFields extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	saveAndContinue(e) {
		e.preventDefault();
		var data = {
			name: this.refs.name.value,
			email: this.refs.email.value,
			password: this.refs.password.value,
		}

		this.props.saveValue(data);
		this.props.nextStep();
	}

	render() {
		return (
			<div>
			      <label className="name">Name</label> 
			      <input type="text" ref="name" defaultValue={ this.props.fieldValues.name } /><br></br>

			      <label className="password">Password</label>
			      <input type="password" ref="password" defaultValue={ this.props.fieldValues.password } /><br></br>

			      <label className="email">Email</label>
			      <input type="email" ref="email" defaultValue={ this.props.fieldValues.email } /><br></br>

			      <button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button>
			</div>
		)
	}
}