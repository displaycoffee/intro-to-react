import { useEffect, useState } from 'react';
import Pet from './Pet';

const animals = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];
const breeds = [];

const SearchParams = () => {
	const [location, setLocation] = useState('');
	const [animal, setAnimal] = useState('');
	const [breed, setBreed] = useState('');
	const [pets, setPets] = useState([]);

	useEffect(() => {
		requestPets();
	}, []);

	async function requestPets() {
		const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
		const json = await res.json();
		setPets(json.pets);
	}

	const handleSelect = (e) => {
		setAnimal(e.target.value);
		setBreed('');
	};

	return (
		<div className="search-params">
			<form>
				<label htmlFor="location">
					Location
					<input type="text" id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
				</label>

				<label htmlFor="animal">
					Animal
					<select id="animal" value={animal} onChange={(e) => handleSelect(e)} onBlur={(e) => handleSelect(e)}>
						<option />
						{animals.map((animal) => {
							return (
								<option key={animal} value={animal}>
									{animal}
								</option>
							);
						})}
					</select>
				</label>

				<label htmlFor="breeds">
					Breeds
					<select id="breeds" value={breeds} onChange={(e) => handleSelect(e)} onBlur={(e) => handleSelect(e)}>
						<option />
						{breeds.map((breedOption) => {
							return (
								<option key={breedOption} value={breedOption}>
									{breedOption}
								</option>
							);
						})}
					</select>
				</label>

				<button>Submit</button>
			</form>

			{pets.map((pet) => {
				return (
					<Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
				);
			})}
		</div>
	);
}

export default SearchParams;