/** @format */

import { API } from '../../backend';

export const createReview = ({ rating, comment, candidateID, userID }) => {
	return fetch(`/candidate/${candidateID}/review/create/${userID}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: {
			rating,
			comment,
		},
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
