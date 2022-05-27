/** @format */

import React from 'react';

export default function ReviewForm({
	handlechange,
	onSubmit,
	errorMessage,
	redirectTo,
}) {
	return (
		<>
			<div>
				<form target="#">
					<select name="rating" id="rating">
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<textarea></textarea>

					<button onClick={onSubmit} type="submit">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
