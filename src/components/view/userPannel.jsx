/** @format */

import { useState } from 'react';
import { isAuthenticated } from '../controller/authentication';
import { deleteReview } from '../controller/reviewApiCall';
import '../resource/stylesheet/userPannel.css';
export default function UserPannel({ reviews, setDidRedirect }) {
	const {
		token,
		user: { name, email, pancard, _id },
	} = isAuthenticated();

	const handleOnclick = (review) => (event) => {
		event.preventDefault();
		deleteReview(token, review.candidate, review._id, _id).then(() => {
			setDidRedirect((prev) => !prev);
		});
	};
	return (
		<>
			<div className="userPannelContainer">
				<div className="left">
					<h1>Candidate Info</h1>
					<div>Name: {name.toUpperCase()} </div>
					<div>PanNumber: {pancard} </div>
					<div>Email: {email}</div>
				</div>
				<div className="beech"></div>
				<div className="right">
					<h1 style={{ margin: 'auto' }}>Reviews</h1>
					{reviews.map((review) => {
						return (
							<div>
								<div>
									<span>Rating: </span>
									{review.rating}
								</div>
								<div>{review.comment}</div>
								<button onClick={handleOnclick(review)}>
									Delete
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
