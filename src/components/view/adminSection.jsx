/** @format */

import '../resource/stylesheet/adminSection.css';
export default function AdminSection({ User }) {
	return (
		<div className="adminSectionContainer">
			<div className="adminSection">
				<h2>Profile Information</h2>
				<div className="img"></div>
				<div>Name: {User.name}</div>
				<div>Email: {User.email}</div>
			</div>
		</div>
	);
}
