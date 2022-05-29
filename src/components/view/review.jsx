/** @format */

import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../controller/authentication';
import { deleteReview } from '../controller/reviewApiCall';
import '../resource/stylesheet/review.css';

export default function Review({ reviews, candidateID }) {
	const { user, token } = isAuthenticated();
	const [didRedirect, setDidRedirect] = useState(false);

	const redirectTo = () => {
		if (didRedirect) {
			return (
				<Redirect
					to={{
						pathname: '/user/dashboard',
					}}
				/>
			);
		}
	};

	const handleClick = (reviewID) => (event) => {
		event.preventDefault();
		deleteReview(token, candidateID, reviewID, user._id).then(() => {
			setDidRedirect(true);
		});
	};
	return (
		<>
			<div className="reviewContainer">
				{reviews.length === 0 ? (
					<div>No Review Yet</div>
				) : (
					reviews.map((review, i) => {
						return (
							<div key={i}>
								<div>
									<span>Rating: </span>
									{review.rating}
								</div>
								<div>{review.comment}</div>
								{user._id === review.author ? (
									<button
										onClick={handleClick(review._id)}
										type="submit"
									>
										Delete
									</button>
								) : (
									<></>
								)}
							</div>
						);
					})
				)}
				{redirectTo()}
			</div>
		</>
	);
}
