/** @format */

import React from 'react';
import '../resource/stylesheet/sign.css';
import NavBar from './navBar';

export default function SignInView({ handlechange, onSubmit }) {
	return (
		<>
			<NavBar />
			<div className="signContainer">
				<form target="#">
					<input
						type="text"
						placeholder="username"
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
			</div>
		</>
	);
}
