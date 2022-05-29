/** @format */

import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getallCandidate } from '../controller/admin';
import { isAuthenticated } from '../controller/authentication';
import { deleteReview } from '../controller/reviewApiCall';
import Info from './info';

import '../resource/stylesheet/review.css';

export default function AllCandidates() {
	const { user, token } = isAuthenticated();
	const [candidates, setCandidates] = useState([]);
	const [didRedirect, setDidRedirect] = useState(false);

	const preload = () => {
		getallCandidate(1, 10, token)
			.then((data) => {
				setCandidates(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		preload();
	}, []);
	// const handleClick = (reviewID) => (event) => {
	// 	event.preventDefault();
	// 	deleteReview(token, candidateID, reviewID, user._id).then(() => {
	// 		setDidRedirect(true);
	// 	});
	// };
	return (
		<>
			<div className="reviewContainer">
				{candidates.length === 0 ? (
					<div>No Review Yet</div>
				) : (
					candidates.map((candidate, i) => {
						return <Info candidate={candidate} key={i} />;
					})
				)}
			</div>
		</>
	);
}
