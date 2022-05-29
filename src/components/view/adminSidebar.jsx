/** @format */

import { Link } from 'react-router-dom';
import '../resource/stylesheet/adminSidebar.css';
export default function AdminSideBar() {
	return (
		<div className="adminSideBarContainer">
			<div className="adminSideBar">
				<div className="heading">Navigation</div>
				<div className="selected">Profile Information</div>
				<div>
					<Link to={'/admin/dashboard/candidates'}>
						Manage Candidate
					</Link>
				</div>
				<div><Link to='/admin/dashboard/reviews'>Manage Reviews</Link></div>
				<div>Manage User</div>
				<div>Manage Districts</div>
				<div></div>
			</div>
		</div>
	);
}
