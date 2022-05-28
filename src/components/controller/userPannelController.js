/** @format */

import { useEffect, useState } from 'react';
import UserPannel from '../view/userPannel';
import { isAuthenticated } from './authentication';
import { getAllReviewOfUser } from './reviewApiCall';

export default function UserPannelController() {
	const { user, token } = isAuthenticated();
	const [didRedirect, setDidRedirect] = useState(false);

	const [reviews, setReviews] = useState([]);
	const preload = () => {
		getAllReviewOfUser(user._id, token).then((data) => {
			setReviews(data);
		});
	};

	useEffect(() => {
		preload();
	}, []);

	return (
		<>
			<UserPannel reviews={reviews} setDidRedirect={setDidRedirect} />
		</>
	);
}
