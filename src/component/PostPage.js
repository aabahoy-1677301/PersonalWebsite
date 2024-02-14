import React, { useState } from "react";

export function PostPage(props) {
	const [title, setTitle] = useState("");
	const [Description, setDescription] = useState("");
	const [img, setImageUrl] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	// retrieves the current values
	function handleSubmit(event) {
		event.preventDefault();

		const post = {
			title,
			Description,
			img,
		};

		try {
			// Get existing posts data from the JSON file
			const existingPostsData = [...props.peoples];

			// Add the new post to the existing posts data
			existingPostsData.push(post);

			props.writeCallbackFunction(existingPostsData);

			// Write the updated posts data back to the JSON file
			localStorage.setItem("props", JSON.stringify(existingPostsData));

			// Clear form inputs
			setTitle("");
			setDescription("");
			setImageUrl("");

			// Display success message
			alert("Post saved successfully!");
		} catch (error) {
			setErrorMessage(error.message);
		}
	}

	// update the title
	function handleTitleChange(event) {
		setTitle(event.target.value);
	}
	// update the description
	function handleDescriptionChange(event) {
		setDescription(event.target.value);
	}

	// update the image url
	function handleImageUrlChange(event) {
		setImageUrl(event.target.value);
	}

	return (
		<main>
			<div className="post-box">
				<form onSubmit={handleSubmit}>
					<h1 className="post-title">Post Picture</h1>
					{img && <img src={img} alt="new upload" />}
					<label>Title</label>
					<input
						type="text"
						placeholder="Title"
						value={title}
						onChange={handleTitleChange}
					/>
					<label>Description</label>
					<input
						type="text"
						placeholder="Description"
						value={Description}
						onChange={handleDescriptionChange}
					/>
					<label htmlFor="image-url">Image URL:</label>
					<input
						type="text"
						placeholder="URL Link"
						id="image-url"
						value={img}
						onChange={handleImageUrlChange}
					/>
					{errorMessage && (
						<div className="error-message">{errorMessage}</div>
					)}
					<button type="submit" aria-label="post button">
						Post on Website
					</button>
				</form>
			</div>
		</main>
	);
}