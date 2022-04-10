import { useState, useEffect } from 'react';
import Pet from './Pet';
import useBreedList from './useBreedList';

const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
	const [location, setLocation] = useState('');
	const [animal, setAnimal] = useState('');
	const [breed, setBreed] = useState('');
	const [pets, setPets] = useState([]);
	const [breeds] = useBreedList(animal);

	useEffect(() => {
		requestPets();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	async function requestPets() {
		const response = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		);
		const json = await response.json();
		setPets(json.pets);
	}

	return (
		<div className="search-params">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					requestPets();
				}}
			>
				<label htmlFor="location">
					Location:
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>

				<label htmlFor="animal">
					Animal:
					<select
						id="animal"
						value={animal}
						onChange={(e) => setAnimal(e.target.value)}
						onBlur={(e) => setAnimal(e.target.value)}
					>
						<option>Please Select</option>
						{animals.map((animal) => (
							<option value={animal} key={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>

				<label htmlFor="breed">
					Breed:
					<select
						id="breed"
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
						onBlur={(e) => setBreed(e.target.value)}
					>
						<option>Please Select</option>
						{breeds.map((breed) => (
							<option value={breed} key={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>

				<button type="submit">Submit</button>
			</form>

			{pets.map((pet) => (
				<Pet
					name={pet.name}
					animal={pet.animal}
					breed={pet.breed}
					key={pet.id}
				/>
			))}
		</div>
	);
};

export default SearchParams;
