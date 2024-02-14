import React, { useState } from "react";
import { ImgGallery } from "./ImgGallery";

export function FilteredList(props) {
	const [selectedColors, setSelectedColors] = useState([]);

	// updates the selected colors state
	const handleColorChange = (event) => {
		const color = event.target.value;
		const checked = event.target.checked;
		if (checked) {
			setSelectedColors([...selectedColors, color]);
		} else {
			setSelectedColors(selectedColors.filter((c) => c !== color));
		}
	};
	//finds the colors of the photos
	const filteredPeople = props.peoples.peoples.filter((person) =>
		selectedColors.includes(person.Color)
	);

	//finds the paths of the images
	let imagePaths;
	if (filteredPeople.length > 0) {
		imagePaths = filteredPeople.map((person) => person.img);
	} else {
		imagePaths = props.peoples.peoples.map((person) => person.img);
	}

	return (
		<div>
			<div>
				<label className="form-check-label" htmlFor="whiteBox">
					<input
						id="whiteBox"
						className="form-check-input"
						type="checkbox"
						value="White"
						checked={selectedColors.includes("White")}
						onChange={handleColorChange}
					/>
					<span className="checkmark"></span>
					White
				</label>
				<label className="form-check-label" htmlFor="blackBox">
					<input
						id="blackBox"
						className="form-check-input"
						type="checkbox"
						value="Black"
						checked={selectedColors.includes("Black")}
						onChange={handleColorChange}
					/>
					<span className="checkmark"></span>
					Black
				</label>
				<label className="form-check-label" htmlFor="tanBox">
					<input
						id="tanBox"
						className="form-check-input"
						type="checkbox"
						value="Tan"
						checked={selectedColors.includes("Tan")}
						onChange={handleColorChange}
					/>
					<span className="checkmark"></span>
					Tan
				</label>
				<label className="form-check-label" htmlFor="greenBox">
					<input
						id="greenBox"
						className="form-check-input"
						type="checkbox"
						value="Green"
						checked={selectedColors.includes("Green")}
						onChange={handleColorChange}
					/>
					<span className="checkmark"></span>
					Green
				</label>
				<label className="form-check-label" htmlFor="orangeBox">
					<input
						id="orangeBox"
						className="form-check-input"
						type="checkbox"
						value="Orange"
						checked={selectedColors.includes("Orange")}
						onChange={handleColorChange}
					/>
					<span className="checkmark"></span>
					Orange
				</label>
			</div>
			<ImgGallery imagePaths={imagePaths} />
		</div>
	);
}

export function SearchBar(props) {
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

	return (
		<div>
			<div className="search-bar">
				<form>
					<input
						type="text"
						placeholder="Search"
						value={searchTerm}
						onChange={handleChange}
					/>
					<button
						aria-label="search"
						type="submit"
						className="btn search"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-search"
							viewBox="0 0 16 16"
						>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</button>
				</form>
			</div>
			{searchTerm && <ImgGallery imagePaths={filteredImages} />}
		</div>
	);
}