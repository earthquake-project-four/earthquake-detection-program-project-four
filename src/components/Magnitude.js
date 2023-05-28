import Event from './Event';
import {useState} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import styled from 'styled-components';

const EventList = styled.ul`
	padding: 5px 0;

	.event-enter {
		opacity: 0;
		transform: translateY(-10px);
	}

	.event-enter-active {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 500ms, transform 500ms;
	}

	.event-exit {
		opacity: 1;
		transform: translateY(0);
	}

	.event-exit-active {
		opacity: 0;
		transform: translateY(10px);
		transition: opacity 300ms, transform 300ms;
	}
`;

const Magnitude = ({numOfEvents, range, hero, intensity, colour, image, earthquakeData}) => {
	const [displayEvents, setDisplayEvents] = useState(false);
	const filteredData = earthquakeData.filter((earthquake) => earthquake.intensity === intensity);

	const handleClick = () => {
		setDisplayEvents(!displayEvents);
	};

	return (
		<li className="legend-list-item">
			<button
				style={{backgroundColor: colour}}
				className={`legend-btn legend-btn-${intensity}`}
				onClick={handleClick}
			>
				<div className="legend-image-container">
					<img
						src={image}
						alt={`${hero} icon`}
					/>
				</div>
				<div className="legend-text">
					<p>{hero}</p>
					<p>Magnitude: {range}</p>
					<p>{numOfEvents} earthquakes</p>
				</div>
			</button>

			<TransitionGroup component={EventList}>
				{displayEvents &&
					filteredData.length > 0 &&
					filteredData.map((earthquake) => (
						<CSSTransition
							key={earthquake.id}
							timeout={300}
							classNames="event"
						>
							<Event
								place={earthquake.place}
								time={earthquake.time}
								mag={earthquake.mag}
							/>
						</CSSTransition>
					))}
				{displayEvents && filteredData.length === 0 && (
					<CSSTransition
						timeout={300}
						classNames="event"
					>
						<p>No events for {hero} to attend to at this time!</p>
					</CSSTransition>
				)}
			</TransitionGroup>
		</li>
	);
};

export default Magnitude;
