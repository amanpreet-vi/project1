/** @format */

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/controller/landingPage';
import SignIn from './components/controller/signIn';
import SignUp from './components/controller/signUp';
// import AdminPanelView from "./components/view/adminPanelView";
import NavBar from './components/view/navBar';
import './components/resource/stylesheet/app.css';

import CandidateController from './components/controller/candidateController';
import { isAuthenticated } from './components/controller/authentication';
import AdminController from './components/controller/adminController';
// import CardController from './components/controller/cardController';

export default function App() {
	const [render, setRender] = useState(false);

	return (
		<>
			<NavBar setRender={setRender} />
			<div className="base">
				<Switch>
					<Route path="/" exact>
						<LandingPage />
					</Route>
					<Route path="/signin">
						<SignIn setRender={setRender} />
					</Route>
					<Route path="/signup">
						<SignUp setRender={setRender} />
					</Route>
					<Route
						path="/candidate"
						render={(props) => <CandidateController {...props} />}
					></Route>
					<Route path="/admin">
						<AdminPanelView />
					</Route>
				</Switch>
			</div>
		</>
	);
}
