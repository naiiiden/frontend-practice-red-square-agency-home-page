import "animate.css";
import WOW from "wow.js";

const IdeaSection = () => {
    new WOW({
        offset: 200,
    }).init();

    return (
        <section className="idea--section">
            <h2 className="idea--section--h2 wow animate__animated animate__slideInUp">We deal in ideas, design and media that are category defying. When the world Millis, you’ve got to Vanilli.</h2>
            <p className="idea--section--p wow animate__animated animate__slideInUp">Red Square believes in rigorous development of brand strategy and whip-smart execution. We make all sorts of things. Things that move markets, compel audiences and sell product. We help great brands create what comes next.</p>
        </section>
    )
}

export default IdeaSection;