/** @format */

import { API } from '../../../backend';

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

export const updateCandidate = (userId, candidateId, token, data) => {
	return fetch(`${API}/admin/${userId}/candidate/${candidateId}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	})
		.then((res) => res.json())

		.catch((err) => console.log(err));
};

export const getallCandidate = (page, limit, token, userID) => {
	return fetch(
		`${API}/admin/${userID}/up/all/2022?page=${page}&limit=${limit}`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		},
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err.message));
};

export const getAllUser = () => {};
