import React, { useState } from "react";
import { FilteredList } from "./ImageFilter";
import { SearchBar } from "./ImageFilter";

export function Homepage(props) {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedColors, setSelectedColors] = useState([]);

	//callback function that will be called when the user searches
	const handleSearch = (queryText) => {
		setSearchTerm(queryText);
	};

	return (
		<main>
			<h1 className="title">FITURE</h1>
			<SearchBar searchCallback={handleSearch} peoples={props} />
			<div className="checkbox-list">
				<FilteredList
					peoples={props}
					selectedColors={selectedColors}
					setSelectedColors={setSelectedColors}
					searchTerm={searchTerm}
				/>
			</div>
		</main>
	);
}