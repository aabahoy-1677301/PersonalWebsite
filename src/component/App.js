import React, { useState, useEffect } from "react";
import { Homepage } from "./HomePage.js";
import { PostPage } from "./PostPage.js";
import { ProfilePage } from "./profile.js";
import { Routes, Route, Navigate, Link } from "react-router-dom";

function App() {
	const [data, setData] = useState(null);

	//fetches the JSON data file
	useEffect(() => {
		fetch("../data/people.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.error(error));
	}, []);

	// updates the data state variable with the new post
	function writeCallback(newData) {
		setData(newData);
	}

	return (
		<div>
			<HeaderSection />
			<Routes>
				<Route
					path="/homepage"
					element={data && <Homepage peoples={data} />}
				/>
				<Route
					path="/profile.html"
					element={data && <ProfilePage peoples={data} />}
				/>
				{/* <Route path="/EditProfile.html" element={<EditProfile />} /> */}
				<Route
					path="/post.html"
					element={
						<PostPage
							writeCallbackFunction={writeCallback}
							peoples={data}
						/>
					}
				/>
				<Route path="*" element={<Navigate to="/homepage" />} />
			</Routes>
			<FooterSection />
		</div>
	);
}

export default App;

export function HeaderSection() {
	return (
		<header className="navbar">
			<div className="navbar-left">
				<Link to="index.html">
					<img src={"./img/clothcampic.png"} alt="camera" />
				</Link>
				<div className="navbar-right">
					<Link to="profile.html">Profile</Link>
					<Link to="post.html">Post</Link>
				</div>
			</div>
		</header>
	);
}

export function FooterSection() {
	return (
		<footer>
			<p>
				<a href="mailto:email@uw.edu">
					<span className="material-icons">mail:</span>
					Email@uw.edu
				</a>
			</p>
			<p>
				<a href="tel:123-456-7890">
					<span className="material-icons">phone:</span>
					123-456-7890
				</a>
			</p>
			<p>&copy; Fiture 2023</p>
		</footer>
	);
}