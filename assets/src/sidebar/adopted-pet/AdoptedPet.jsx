/* React */
import { useContext } from 'react';

/* Local styles */
import './styles/adopted-pet.scss';

/* Local components */
import { Context } from '../../entry/context/Context';

export const AdoptedPet = () => {
	const context = useContext(Context);
	const [adoptedPet, setAdoptedPet] = context.adoptedPet;

	return adoptedPet ? (
		<div className="adopted-pet styled-bg">
			<div className="adopted-pet-image">
				<img
					src={adoptedPet?.images[0] ? adoptedPet.images[0] : context.variables.images.default}
					alt={adoptedPet.name}
					title={adoptedPet.name}
				/>
			</div>

			<div className="adopted-pet-name">
				<strong>Your future pet:</strong> {adoptedPet.name}
			</div>
		</div>
	) : null;
};
