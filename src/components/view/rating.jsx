/** @format */

import React from 'react';
import '../resource/stylesheet/rating.css';

export default function Rating(props) {
	// let total = 0;
	const values = [];
	const secondValue = [];
	let starcount = 0;
	let blackstarcount = 5;
	if (props.stars <= 5) {
		starcount = props.stars;
		blackstarcount = blackstarcount - props.stars;
	} else {
		starcount = 5;
		blackstarcount = 0;
	}
	for (let i = 0; i < starcount; i++) {
		values.push(i);
	}
	for (let i = 0; i < blackstarcount; i++) {
		secondValue.push(i);
	}
	function clicked(req1, req2) {
		let url = '';
		req1 !== 0 ? (url = `/req1?val=` + req1) : (url = `/req2?val=` + req2);
		window.location = url;
	}
	return (
		<>
			<div className="ratingOuter">
				<div className="ratingContainer">
					{values.map((i, ind) => (
						<div
							key={ind}
							className="firstStar"
							onClick={() => clicked(i + 1, 0)}
						>
							&nbsp;
						</div>
					))}
					{secondValue.map((i, ind) => (
						<div
							key={ind}
							className="secondStar"
							onClick={() => clicked(0, i + 1)}
						>
							&nbsp;
						</div>
					))}
				</div>
			</div>
		</>
	);
}
