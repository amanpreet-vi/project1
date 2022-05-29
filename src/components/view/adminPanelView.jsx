/** @format */

import React from 'react';
import { isAuthenticated } from '../controller/authentication';
import '../resource/stylesheet/admin.css';
import AdminSection from './adminSection';
import AdminSideBar from './adminSidebar';

export default function AdminPanelView() {
	const { user } = isAuthenticated();
	return (
		<>
			<div className="headingAdmin">
				<div>Admin Dashboard</div>
			</div>
			<div className="adminInner">
				<AdminSideBar />
				<AdminSection User={user} />
			</div>
		</>
	);
}
