/** @format */

import React, { useState } from 'react';
import '../resource/stylesheet/search.css';
import arrowSearch from '../resource/images/search.png';
import searchDistrict from '../controller/searchDistrict';
import CardView from './card';
import CardController from '../controller/cardController';

export default function SearchView() {
	const [search, setSearch] = useState('');
	const [districts, setDistricts] = useState([]);
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
					setDistricts([...data]);
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
			<div>
				{error ? (
					<p>Enter Valid District Name</p>
				) : (
					<CardController districts={districts} />
				)}
			</div>
		</>
	);
}
