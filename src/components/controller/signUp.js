/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpView from '../view/signUpView';
import { signup } from './authentication';

export default function SignUp() {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		pancard: '',
		error: '',
		success: false,
	});
	const { name, email, password, pancard, error, success } = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		console.log('in');
		event.preventDefault();
		setValues({ ...values, error: false });
		signup({ name, email, pancard, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
					console.log(values);
				} else {
					setValues({
						...values,
						name: '',
						email: '',
						password: '',
						pancard: '',
						error: '',
						success: true,
					});
				}
			})
			.catch((err) => console.log('Error in signup route'));
	};

	const successMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div
						className="alert alert-success"
						style={{ display: success ? '' : 'none' }}
					>
						Welcome. Please <Link to="/signin">Login here.</Link>
					</div>
				</div>
			</div>
		);
	};
	const errorMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<div
						className="alert alert-danger"
						style={{ display: error ? '' : 'none' }}
					>
						{error}
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<SignUpView
				handleChange={handleChange}
				onSubmit={onSubmit}
				errorMessage={errorMessage}
				successMessage={successMessage}
			/>
		</>
	);
}
