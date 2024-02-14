import React, { useState } from "react";
import EditProfileForm from "./EditProfile";
import { ImgGallery } from "./ImgGallery";

export function ProfilePage(props) {
	return (
		<div>
			<ProfileHeading peoples={props} />
			<ProfileFits peoples={props} />
		</div>
	);
}

function ProfileHeading() {
	const [user, setUser] = useState({
		name: "sheluvhungy",
		imageUrl:
			"https://rare-gallery.com/uploads/posts/4557125-squidward-tentacles-spongebob-squarepants.jpg",
	});
	const [editing, setEditing] = useState(false);

	const handleSave = (updatedUser) => {
		setUser(updatedUser);
		setEditing(false);
	};

	return (
		<div>
			{editing ? (
				<EditProfileForm user={user} onSave={handleSave} />
			) : (
				<div>
					<div className="user">
						<div className="avi">
							<img src={user.imageUrl} alt="Profile Picture" />
						</div>
						<div className="bio">
							<h1>
								<p>{user.name}</p>
							</h1>
							<button onClick={() => setEditing(true)}>
								Edit Profile
							</button>
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
				</div>
			)}
		</div>
	);
}

function ProfileFits(props) {
	// replace with a name in the json
	const username = "sheluvhungy";
	const user = props.peoples.peoples.find(
		(person) => person.username === username
	);

	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	// filters the array based on the search term and returns an array of image paths.
	const filteredImages = props.peoples.peoples
		.filter((person) =>
			person.img.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.map((person) => person.img);

	if (!user) {
		return <div>User not found</div>;
	}

	return (
		<div className="fits">
			<div className="recent-fits">
				<h1>Recent Fits</h1>
			</div>
			<div className="post-images">
				<ImgGallery imagePaths={[user.img]} />
			</div>
		</div>
	);
}