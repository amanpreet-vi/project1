/** @format */

import { API } from '../../backend';

export const searchCandidateByConstituency = (Constituency) => {
	console.log(Constituency);
	return fetch(`${API}/up/candidate/2022/constituency/${Constituency}`)
		.then((res) => res.json())
		.catch((err) => console.log(err));
};
