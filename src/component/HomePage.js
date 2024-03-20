import React, { useState } from "react";

export function Homepage(props) {
    const [user, setUser] = useState({
		name: "sheluvhungy",
		imageUrl:
			"https://rare-gallery.com/uploads/posts/4557125-squidward-tentacles-spongebob-squarepants.jpg",
	});

	return (
		<main>
			<h1 className="title">DAY 3</h1>
            <div className="avi">
                    <img src={user.imageUrl} alt="Avatar" />
            </div>
            <div className="button-box">
                <div className="redirect-button"> 
                    <button type="button" class="btn btn-outline-primary">Test</button>
                    <button type="button" class="btn btn-outline-warning">Test</button>
                </div>
                <div className="redirect-button">
                    <button type="button" class="btn btn-outline-success">Test</button>
                    <button type="button" class="btn btn-outline-danger">Test</button>
                </div>
            </div>
            <div className="contact">
                <button type="button" disabled></button>
            </div>
		</main>
	);
}