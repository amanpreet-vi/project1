/** @format */

import React from 'react';
import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '.';

const AdminRoute = ({ component: Component, ...rest }) => {
	console.log({ ...rest });
	return (
		<Route
			render={(props) =>
				isAuthenticated() && isAuthenticated().user.role === 1 ? (
					<Component {...rest} />
				) : isAuthenticated() ? (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props.location },
						}}
					/>
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
