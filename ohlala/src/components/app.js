import React from 'react';
import '../App.css';
import Registration from './registration.js';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
	constructor() {
		super()
	}


	render() {
		return (
			<div className="container margin-top">
				<Registration />
			</div>
		)
	}
}