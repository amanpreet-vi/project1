/** @format */

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Cards from '../view/card';
import { searchCandidateByConstituency } from './searchCandidate';

export default function CardController({ districts }) {
	const [didRedirect, setDidRedirect] = useState(false);
	const [candidate, setCandidate] = useState({});

	const redirectTo = () => {
		if (didRedirect) {
			return (
				<Redirect
					to={{
						pathname: '/candidate',
						state: candidate,
					}}
				/>
			);
		}
	};

	const handleOnclick = (e) => {
		const Constituency = e.target.innerText;

		searchCandidateByConstituency(Constituency).then((data) => {
			setCandidate(data);
			setDidRedirect(true);
		});
	};
	return (
		<div className="card-list">
			{districts.map((d, i) => (
				<Cards district={d} handleOnclick={handleOnclick} key={i} />
			))}
			{<Cards />}
			{redirectTo()}
		</div>
	);
}
