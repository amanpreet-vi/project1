/** @format */

import React from 'react';
import Cards from '../view/card';
import { searchCandidateByConstituency } from './searchCandidate';

export default function CardController({ districts }) {
	const handleOnclick = (e) => {
		const Constituency = e.target.innerText;
		searchCandidateByConstituency(Constituency).then((data) => {
			console.log(data.data[0]);
		});
	};
	return (
		<div className="card-list">
			{districts.map((d, i) => (
				<Cards district={d} handleOnclick={handleOnclick} key={i} />
			))}
			{<Cards />}
		</div>
	);
}
