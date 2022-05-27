/** @format */

import React from 'react';
import '../resource/stylesheet/sign.css';
import NavBar from './navBar';

export default function SignInView({
	handlechange,
	onSubmit,
	errorMessage,
	redirectTo,
}) {
	return (
		<>
			<div className="signContainer">
				{errorMessage()}
				<form target="#">
					<input
						type="text"
						placeholder="Email"
						onChange={handlechange('email')}
					/>
					<input
						type="password"
						onChange={handlechange('password')}
						placeholder="password"
					/>
					<button onClick={onSubmit} type="submit">
						Submit
					</button>
				</form>
				{redirectTo()}
			</div>
		</>
	);
}
