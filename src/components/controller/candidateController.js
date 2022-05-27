/** @format */

import React from 'react';
import Candidate from '../view/candidate';

export default function CandidateController(props) {
	return (
		<>
			<Candidate candidate={props.location.state} />
		</>
	);
}
