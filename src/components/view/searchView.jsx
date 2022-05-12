/** @format */

import React, { useState } from 'react';
import '../resource/stylesheet/search.css';
import arrowSearch from '../resource/images/search.png';
import searchDistrict from '../controller/searchDistrict';

export default function SearchView() {
	const [search, setSearch] = useState('');
	const [district, setDistrict] = useState([]);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	const handleOnsubmit = (e) => {
		e.preventDefault();
		searchDistrict(search)
			.then((data) => {
				if (data.length === 0) setError(true);
				else {
					setError(false);
					setDistrict([...data]);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};
	return (
		<>
			<div>

				<form action="#" className="searchContainer">
					
					<input
						className="search"
						type="text"
						name="searchedContent"
						onChange={handleChange}
						placeholder="Enter name of District"
					/>
					<button type="submit" onClick={handleOnsubmit}>
						<img src={arrowSearch} alt="search" />
					</button>
				</form>
			</div>
			<ol>
				{error ? (
					<p>Enter Valid District Name</p>
				) : (
					district.map((d, i) => {
						return (
							<li key={i}>
								{d.name}
								<br />
								<ul>
									{d.constituency.map((c, i) => (
										<li key={i}>{c}</li>
									))}
								</ul>
							</li>
						);
					})
				)}
			</ol>
		</>
	);
}
