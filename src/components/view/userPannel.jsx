/** @format */

import { isAuthenticated } from '../controller/authentication';
import '../resource/stylesheet/userPannel.css';
export default function UserPannel({ reviews }) {
	const {
		user: { name, email, pancard },
	} = isAuthenticated();
	return (
		<>
			<div className="userPannelContainer">
				<div className="left">
					<div>Name: {name.toUpperCase()} </div>
					<div>PanNumber: {pancard} </div>
					<div>Email: {email}</div>
				</div>
				<div className="beech"></div>
				<div className="right">
					{reviews.map((review) => {
						return (
							<div>
								<div>
									<span>Rating: </span>
									{review.rating}
								</div>
								<div>{review.comment}</div>
								<button>Delete</button>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
