import genGeo from "../assets/gen-geology-portrait.png";
import richMortal from "../assets/rich-mortal-portrait.png";
import strongGood from "../assets/strong-good-portrait.png";

const About = () => {
    return (
        <section className="about">
            <h3>About the ECS</h3>
            <p>The Extraordinary Collective of Superheroes (ECS) is a small team of big talents. Our tireless supercats are constantly at the front lines of earthquake education and disaster relief, working 24/7 to bring safety to the catizens of the world.</p>

            <h3>Meet the Team</h3>

            <h4>General Geology-Teachers</h4>
            <img src={genGeo} alt="a wise old grey cat with yellow glasses" className="low"/>
            <p>Our great General speaks with the pronoun "we", but not because he is royalty. What allows him to attend to dozens of minor earthquakes every single day, calming the frightened cats with his deep voice and deeper mind? He is one, he is many, he is infinite.</p>

            <h4>Rich Mortal</h4>
            <img src={richMortal} alt="a young majestic billionaire calico cat in an orange cape" className="medium"/>
            <p>"What's your superpower?"</p>
            <p>"I'm Rich."</p>
            
            <h4>StrongGood</h4>
            <img src={strongGood} alt="an imperial white cat in red cape emulating napoleon" className="high"/>
            <p>Not to be confused with his brothers StrongBig and StrongBad, StrongGood has always wanted to do good things. But he is happiest when his services are not needed, because as the supercat responsible for the more serious quakes, his idleness means that the tectonic plates beneath our paws are more or less at peace.</p>
        </section>
    )
}

export default About;