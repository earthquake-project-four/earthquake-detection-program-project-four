import Event from './Event';
import {useState} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import styled from 'styled-components';

const EventList = styled.ul`
	padding: 5px 0 5px 20px;

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
	const [expanded, setExpanded] = useState(false);

	const handleClick = (event) => {
		event.preventDefault();
		setDisplayEvents(!displayEvents);
		setExpanded(!expanded);
	};

	const handleTouchStart = (event) => {
		event.preventDefault();
		setDisplayEvents(!displayEvents);
		setExpanded(!expanded);
	};

	return (
		<li>
			<div
				style={{backgroundColor: colour}}
				className="legend-item"
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
				{!expanded ? (
					<svg
						onClick={handleClick}
						onTouchStart={handleTouchStart}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						width="40px"
						height="40px"
					>
						<g
							id="SVGRepo_bgCarrier"
							strokeWidth="0"
						></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{' '}
							<path
								d="M18 9L12 15L6 9"
								stroke="#ffffff"
								strokeWidth="2"
							></path>{' '}
						</g>
					</svg>
				) : (
					<svg
						onClick={handleClick}
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						width="40px"
						height="40px"
					>
						<g
							id="SVGRepo_bgCarrier"
							strokeWidth="0"
						></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							{' '}
							<path
								d="M18 15L12 9L6 15"
								stroke="#ffffff"
								strokeWidth="2"
							></path>{' '}
						</g>
					</svg>
				)}
			</div>

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
