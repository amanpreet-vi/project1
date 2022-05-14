/** @format */

import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/controller/landingPage';
import SignInView from './components/view/signInView';
import SignUpView from './components/view/signUpView';
const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/signin" exact component={SignInView} />
				<Route path="/signup" exact component={SignUpView} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
