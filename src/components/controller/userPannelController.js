/** @format */

import { useEffect, useState } from 'react';
import UserPannel from '../view/userPannel';
import { isAuthenticated } from './authentication';
import { getAllReviewOfUser } from './reviewApiCall';
import { searchCandidateById } from './searchCandidate';

export default function UserPannelController() {
	const { user, token } = isAuthenticated();
	const [didRedirect, setDidRedirect] = useState(false);

	const [reviews, setReviews] = useState([]);
	const preload = () => {
		getAllReviewOfUser(user._id, token).then(async (data) => {
			let r = [];
			const p = data.map(async (re) => {
				const candidate = await searchCandidateById(re.candidate);
				re.candidate = candidate;
				r.push(re);
			});

			await Promise.all(p);
			setReviews(r);
		});
	};

	useEffect(() => {
		preload();
	}, [didRedirect]);

	return (
		<>
			<UserPannel reviews={reviews} setDidRedirect={setDidRedirect} />
		</>
	);
}
