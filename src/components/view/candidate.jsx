/** @format */

import React from 'react';

import '../resource/stylesheet/candidate.css';
import Info from './info';
import News from './news';
import Rating from './rating';
import Review from './review';
import ReviewForm from './reviewForm';

export default function Candidate({ candidate }) {
	/** dummy data- used to render the element on the frontend*/

	return (
		<>
			<div className="candidateContainer">
				<div className="top">
					<Info candidate={candidate} />
					<News newsArticles={candidate.newsArticles} />
				</div>
				<div className="bottom">
					<Rating stars={candidate.ratings} />
					<ReviewForm />
					<Review reviews={candidate.reviews} />
				</div>
			</div>
		</>
	);
}
