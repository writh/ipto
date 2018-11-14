import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App.css';

class AddBusiness extends Component {
	constructor() {
		super();
		this.state = {
            name: '',
            coordinates: 0,
            address: '',
            zip: 0,
            state: 0,
		};
	}
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	newBusiness() {
		const post = {
            name: '',
            coordinates: 0,
            address: '',
            zip: 0,
            state: 0
		};
		axios.post('/api/addbusiness', post).then(() => {
			this.props.history.push('/map');
		});
	}
	render() {
		return (
			<div className="Form">
				<div className="form-card">
                    <input>name</input>
					<input>address</input>
					<input>zip code</input>
					<input>state</input>
					<br/>
					<br/>
					<button id='post-button' className="black-button" onClick={() => this.newBusiness()}>
						post
					</button>
				</div>
			</div>
		);
	}
}
export default connect((state) => state)(AddBusiness);