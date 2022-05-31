/** @format */

import { Link } from 'react-router-dom';
import '../resource/stylesheet/adminSidebar.css';
export default function AdminSideBar() {
	return (
		<div className="adminSideBarContainer">
			<div className="adminSideBar">
				<div className="heading">Navigation</div>
				<div className="links selected">Profile Information</div>
				<Link className="links" to={'/admin/dashboard/candidates'}>
					<div>Manage Candidate</div>
				</Link>
				<Link className="links" to="/admin/dashboard/reviews">
					<div>Manage Reviews</div>
				</Link>
				<div className="links">Manage User</div>

				<div></div>
			</div>
		</div>
	);
}
