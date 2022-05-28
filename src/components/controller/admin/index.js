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


export const getAllUser = ()=>{
    
}