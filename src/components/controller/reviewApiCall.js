/** @format */

import { API } from '../../backend';

export const createReview = (rating, comment, token, candidateID, userID) => {
	return fetch(`${API}/candidate/${candidateID}/review/create/${userID}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			rating: rating,
			comment: comment,
		}),
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
