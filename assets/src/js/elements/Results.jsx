/* Local components */
import { Pet } from './Pet';

export const Results = ({ pets }) => {
	return (
		<div className="search">
			{pets && pets.length !== 0 ? (
				pets.map((pet) => (
					<Pet
						key={pet.id}
						name={pet.name}
						animal={pet.animal}
						breed={pet.breed}
						images={pet.images}
						location={`${pet.city}, ${pet.state}`}
					/>
				))
			) : (
				<h1>No pets found. :(</h1>
			)}
		</div>
	);
};