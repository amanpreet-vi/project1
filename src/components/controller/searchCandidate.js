/** @format */

import { API } from '../../backend';

export const searchCandidateByConstituency = (Constituency) => {
	return fetch(`${API}/up/candidate/2022/constituency/${Constituency}`)
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

export const searchCandidateById = (CandidateID) => {
	return fetch(`${API}/up/candidate/2022/${CandidateID}`)
		.then((res) => res.json())
		.catch(console.log);
};
