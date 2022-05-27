/** @format */

import '../resource/stylesheet/review.css';

export default function Review({ reviews }) {
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
							</div>
						);
					})
				)}
			</div>
		</>
	);
}
