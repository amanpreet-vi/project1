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
export const deleteReview = (token, candidateID, reviewID, userID) => {
	return fetch(
		`${API}/candidate/${candidateID}/review/${reviewID}/${userID}`,
		{
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		},
	)
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
