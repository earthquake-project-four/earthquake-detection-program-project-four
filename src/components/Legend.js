import Magnitude from './Magnitude';
import genGeo from '../assets/gen-geology.png';
import richMortal from '../assets/rich-mortal.png';
import strongGood from '../assets/strong-good.png';
import teamECS from '../assets/team-ecs.png';

const Legend = ({earthquakeData}) => {
	const legendItems = [
		{
			hero: 'Gen. Geology-Teachers',
			numOfEvents: earthquakeData.filter((earthquake) => earthquake.intensity === 'low').length,
			range: '2.50 - 3.49',
			intensity: 'low',
			colour: '#fddd59',
			image: genGeo,
		},
		{
			hero: 'Rich Mortal',
			numOfEvents: earthquakeData.filter((earthquake) => earthquake.intensity === 'medium').length,
			range: '3.50 - 5.99',
			intensity: 'medium',
			colour: '#ff914d',
			image: richMortal,
		},
		{
			hero: 'StrongGood',
			numOfEvents: earthquakeData.filter((earthquake) => earthquake.intensity === 'high').length,
			range: '6.00 - 6.99',
			intensity: 'high',
			colour: '#ff3131',
			image: strongGood,
		},
		{
			hero: 'All Superheroes',
			numOfEvents: earthquakeData.filter((earthquake) => earthquake.intensity === 'severe').length,
			range: '7.00 - 10.00',
			intensity: 'severe',
			colour: '#a51b1b',
			image: teamECS,
		},
	];

	return (
		<ul className="magnitude-list">
			{legendItems.map((legendItem) => (
				<Magnitude
					key={legendItem.hero}
					image={legendItem.image}
					colour={legendItem.colour}
					intensity={legendItem.intensity}
					numOfEvents={legendItem.numOfEvents}
					range={legendItem.range}
					hero={legendItem.hero}
					earthquakeData={earthquakeData}
				/>
			))}
		</ul>
	);
};

export default Legend;
