import React, { useState } from "react";

export default function Like() {
	const [visible, setVisible] = useState(true);
	function handleClick() {
		setVisible(!visible);
	}
	return (
		<div className="like-container">
			<div className="like-image">
				<div className="like-button">
					{visible && (
						<img
							src={'/img/greyheart.png'}
							onClick={handleClick}
							alt="Grey Heart Icon"
						/>
					)}
					{!visible && (
						<img
							src={'/img/heart.png'}
							onClick={handleClick}
							alt="Red Heart Icon"
						/>
					)}
				</div>
			</div>
		</div>
	);
}