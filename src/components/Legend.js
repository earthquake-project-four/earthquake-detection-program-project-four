import Magnitude from "./Magnitude";

const Legend = ({ earthquakeData }) => {
    const legendItems = [
        {
            hero: "General Geology-Teachers",
            numOfEvents: earthquakeData.filter(
                (earthquake) => earthquake.intensity === "low"
            ).length,
            range: "2.50 - 3.49",
            intensity: "low",
        },
        {
            hero: "Rich Mortal",
            numOfEvents: earthquakeData.filter(
                (earthquake) => earthquake.intensity === "medium"
            ).length,
            range: "3.50 - 5.99",
            intensity: "medium",
        },
        {
            hero: "StrongGood",
            numOfEvents: earthquakeData.filter(
                (earthquake) => earthquake.intensity === "high"
            ).length,
            range: "6.00 - 6.99",
            intensity: "high",
        },
        {
            hero: "All",
            numOfEvents: earthquakeData.filter(
                (earthquake) => earthquake.intensity === "severe"
            ).length,
            range: "7.00 - 10.00",
            intensity: "severe",
        },
    ];

    return (
        <section className="legend">
            <ul>
                {legendItems.map((legendItem) => {
                    return (
                        <Magnitude
                            key={legendItem.hero}
                            intensity={legendItem.intensity}
                            numOfEvents={legendItem.numOfEvents}
                            range={legendItem.range}
                            hero={legendItem.hero}
                        />
                    );
                })}
            </ul>
        </section>
    );
};

export default Legend;
