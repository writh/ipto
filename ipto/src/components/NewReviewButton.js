import React, { Component } from 'react';
import '../App.css';

class NewReviewButton extends Component {

    showNewReview(event, name) {
		this.props.history.push('/Form');
	}

    render() {
        return(

            <div className="NewReviewButton">
                <button id='new-review-button' className="black-button" onClick={() => this.showNewReviewForm()}>
						New Review
					</button>
            </div>


        )
    }
}

export default NewReviewButton;