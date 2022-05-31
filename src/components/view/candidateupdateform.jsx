/** @format */
import '../resource/stylesheet/candidateUpdateForm.css';
import React, { useState } from 'react';
import { updateCandidate } from '../controller/admin';
import { isAuthenticated } from '../controller/authentication';
import { Redirect } from 'react-router-dom';

export default function CandidateUpdate(props) {
	const [candidate, setCandidate] = useState(props.location.state);
	const { user, token } = isAuthenticated();
	const [didRedirect, setDidRedirect] = useState(false);

	const handleChange = (name) => (event) => {
		setCandidate({
			...candidate,
			[name]: event.target.value,
		});
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setCandidate({ ...candidate });
		updateCandidate(user._id, candidate._id, token, candidate)
			.then((data) => {
				setDidRedirect((prev) => !prev);
				console.log(data);
			})
			.catch(console.log);
	};

	return (
		<>
			<div className="updateForm">
				<form target="#">
					<div>
						<h1>Update Data</h1>
						<div>
							<label htmlFor="Name">Name: </label>
							<input
								type="text"
								name="Name"
								value={candidate.name}
								onChange={handleChange('name')}
							/>
						</div>
						<div>
							<label htmlFor="Constituency">Constituency: </label>
							<input
								type="text"
								name="Constituency"
								value={candidate.Constituency}
								onChange={handleChange('Constituency')}
							/>
						</div>
						<div>
							<label htmlFor="Assets">Assets: </label>
							<input
								type="text"
								name="Assets"
								value={candidate.total_assets}
								onChange={handleChange('total_assets')}
							/>
						</div>
						<div>
							<label htmlFor="Party">Party: </label>
							<input
								type="text"
								name="Party"
								value={candidate.party}
								onChange={handleChange('party')}
							/>
						</div>
						<div>
							<label htmlFor="Education">Education: </label>
							<input
								type="text"
								name="Education"
								value={candidate.education}
								onChange={handleChange('education')}
							/>
						</div>
						<div>
							<label htmlFor="CriminalCases">
								CriminalCases:{' '}
							</label>
							<input
								type="number"
								name="CriminalCases"
								value={candidate.criminalCases}
								onChange={handleChange('criminalCases')}
							/>
						</div>
					</div>
					<div>
						<button onClick={onSubmit}>update</button>
					</div>
				</form>
				{didRedirect ? <Redirect to="/admin/dashboard" /> : <></>}
			</div>
		</>
	);
}
