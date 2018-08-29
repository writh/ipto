import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App.css';

class Form extends Component {
	constructor() {
		super();
		this.state = {
			stars: 1,
			clean: 1,
			purchase: true,
			handicap: true,
			gender: '',
			occupancy: 1
		};
	}
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	newReview() {
		const post = {
			stars: this.state.stars,
			clean: this.state.clean,
			purchase: this.state.purchase,
			handicap: this.state.handicap,
			gender: this.state.gender,
			occupancy: this.state.occupancy
		};
		axios.post('/api/addreview', post).then(() => {
			this.props.history.push('/map');
		});
	}
	render() {
		return (
			<div className="Form">
				<div className="form-card">
					<h3>Overall rating out of 5:</h3>
					<select className="form-input" value={this.state.stars} onChange={(e) => this.handleChange(e, 'stars')}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<h3>Rating out of 5 for cleanliness:</h3>
					<select className="form-input" value={this.state.clean} onChange={(e) => this.handleChange(e, 'clean')}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<h3>Is a purchase required to use the restroom?</h3>
					<select className="form-input" value={this.state.purchase} onChange={(e) => this.handleChange(e, 'purchase')}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<h3>Is the restroom handicap accessible?</h3>
					<select className="form-input" value={this.state.handicap} onChange={(e) => this.handleChange(e, 'handicap')}>
						<option value="true">True</option>
						<option value="false">False</option>
					</select>
					<h3>Describe the restroom's gender accessibility:</h3>
					<input
						className="form-input"
						value={this.state.gender}
						onChange={(e) => this.handleChange(e, 'gender')}
						cols="30"
						rows="10"
					/>
					<h3>How many people have access to the restroom at once?</h3>
					<select className="form-input" value={this.state.occupancy} onChange={(e) => this.handleChange(e, 'occupancy')}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>

					</select>
					<br/>
					<br/>
					<button id='post-button' className="black-button" onClick={() => this.newReview()}>
						post
					</button>
				</div>
			</div>
		);
	}
}
export default connect((state) => state)(Form);