/** @format */

import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './components/controller/landingPage';
import SignIn from './components/controller/signIn';
import SignUp from './components/controller/signUp';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/signin" exact component={SignIn} />
				<Route path="/signup" exact component={SignUp} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
