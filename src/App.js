/** @format */

import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './components/controller/landingPage';
import SignIn from './components/controller/signIn';
import SignUp from './components/controller/signUp';
import NavBar from './components/view/navBar';
import './components/resource/stylesheet/app.css';

import CandidateController from './components/controller/candidateController';
import AdminController from './components/controller/adminController';
import About from './components/view/about';
import Contact from './components/view/contact';
import AdminRoute from './components/controller/authentication/AdminRoutes';
import AdminPanelView from './components/view/adminPanelView';
import PrivateRoute from './components/controller/authentication/PrivateRoute';
import UserPannelController from './components/controller/userPannelController';

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
					<Route path="/signin" exact>
						<SignIn setRender={setRender} />
					</Route>
					<Route path="/signup" exact>
						<SignUp setRender={setRender} />
					</Route>
					<Route path="/about" exact>
						<About />
					</Route>
					<Route path="/contact" exact>
						<Contact />
					</Route>
					<Route
						path="/candidate"
						render={(props) => <CandidateController {...props} />}
					></Route>
					<AdminRoute
						path="/admin/dashboard"
						exact
						component={AdminController}
					/>
					<PrivateRoute
						path="/user/dashboard"
						exact
						component={UserPannelController}
					/>
				</Switch>
			</div>
		</>
	);
}
