/** @format */

import React from 'react';

export default function ReviewForm({ handlechange, onSubmit, errorMessage }) {
	return (
		<>
			<div>
				<form target="#">
					<select
						name="rating"
						onChange={handlechange('rating')}
						id="rating"
					>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<textarea
						name="comment"
						onChange={handlechange('comment')}
					></textarea>

					<button onClick={onSubmit} type="submit">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
