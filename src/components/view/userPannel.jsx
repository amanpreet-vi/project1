/** @format */

import { useState } from 'react';
import { isAuthenticated } from '../controller/authentication';
import { deleteReview } from '../controller/reviewApiCall';
import { searchCandidateById } from '../controller/searchCandidate';
import '../resource/stylesheet/userPannel.css';
export default function UserPannel({ reviews, setDidRedirect }) {
	const {
		token,
		user: { name, email, pancard, _id },
	} = isAuthenticated();

	const handleOnclick = (review) => (event) => {
		event.preventDefault();
		deleteReview(token, review.candidate._id, review._id, _id).then(() => {
			setDidRedirect((prev) => !prev);
		});
	};
	return (
		<>
			<div className="userPannelContainer">
				<div className="left">
					<h1>User Info</h1>
					<div>Name: {name.toUpperCase()} </div>
					<div>PanNumber: {pancard} </div>
					<div>Email: {email}</div>
				</div>
				<div className="beech"></div>
				<div className="right">
					<h1>Reviews</h1>
					<div className="reviewList">
						{reviews.map((review, key) => {
							return (
								<div className="reviewBox" key={key}>
									<div>
										<h4>
											<span>Candidate: </span>
											{review.candidate.name}
										</h4>
										<h5>
											<span>Constituency: </span>
											{review.candidate.Constituency}
										</h5>
										<span>Rating: </span>
										{review.rating}
									</div>
									<div className="reviewComment">
										{review.comment}
									</div>
									<button onClick={handleOnclick(review)}>
										Delete
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
