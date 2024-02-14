import React, { useState } from "react";

function EditProfileForm({ user, onSave }) {
	const [name, setName] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const isValidImage = (url) => {
		const img = new Image();
		img.src = url;
		return img.complete && img.naturalWidth !== 0;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!isValidImage(imageUrl)) {
			setErrorMessage("Please enter a valid link.");
		} else {
			const updatedUser = { ...user, name, imageUrl };
			onSave(updatedUser);
		}
	};

	function handleImageUrlChange(event) {
		setImageUrl(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="user">
				<div className="avi-edit">
					<p>Copy and paste image address</p>
					<input
						type="text"
						value={imageUrl}
						onChange={handleImageUrlChange}
					/>
					{errorMessage && <p>{errorMessage}</p>}
				</div>
				<div className="bio-edit">
					<h1>
						<p>Enter display name</p>
						<input
							type="text"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</h1>
					<p>@Squidward</p>
					<button type="submit">Save</button>
				</div>
			</div>
			<div className="stats">
				<div>
					<h2>Following</h2>
					<p>1</p>
				</div>
				<div>
					<h2>Followers</h2>
					<p>1,004</p>
				</div>
			</div>
		</form>
	);
}

export default EditProfileForm;