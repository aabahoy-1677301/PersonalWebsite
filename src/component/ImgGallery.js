import React from "react";
import Like from "./heart.js";

export function ImgGallery(props) {
	return (
		<div className="img-gallery">
			{props.imagePaths.map((path) => (
				<div className="image-container" key={path}>
					<Like />
					<img src={path} alt="gallery" id="imgGall" />
				</div>
			))}
		</div>
	);
}