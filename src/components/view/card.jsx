/** @format */

import React from 'react';
import '../resource/stylesheet/card.css';

export default function Cards({ district }) {
	return (
		<>
			{district ? (
				<div className="card-container">
					<h2>{district.name}</h2>
					<h3>Constituency:</h3>
					<ul>
						{district.constituency.map((c, i) => (
							<li key={i}>{c}</li>
						))}
					</ul>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
