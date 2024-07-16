import React from "react";
import "./App.css";

function App() {
	const pets = [
		{
			name: "Purrsloud",
			species: "Cat",
			favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
			birthYear: 2016,
			photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
		},
		{
			name: "Barksalot",
			species: "Dog",
			birthYear: 2008,
			photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg",
		},
		{
			name: "Meowsalot",
			species: "Cat",
			favFoods: ["tuna", "catnip", "celery"],
			birthYear: 2012,
			photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg",
		},
	];
	return (
		<div>
			<h1>Random Pets</h1>
			<ul>
				{pets.map((pet, index) => {
					return (
						<li key={index}>
							<h2 key={pet}>{pet.name}</h2>
							<h3>{pet.species}</h3>
							<img src={pet.photo} alt={pet.name} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default App;
