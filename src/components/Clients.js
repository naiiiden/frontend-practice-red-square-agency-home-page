import "animate.css";
import WOW from "wow.js";

const Clients = () => {
    new WOW().init();

    return (
        <div className="section--border--container">
            <div className="section--separator wow"></div>
            <section className="clients--section">
                <h3 className="clients--section--heading wow animate__animated animate__fadeIn">Select Clients</h3>
                <div className="clients--ul--container">
                    <ul className="clients--ul">
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0100s">Cherokee Casinos</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0150s">Flipboard</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0200s">Foxwoods</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0250s">Glanbia Nutritionals</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0300s">Google</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0350s">Hard Rock</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0400s">Hibbett Sports</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0450s">Hilton Worldwide</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0500s">Jack Daniel's</li>
                    </ul>
                    <ul className="clients--ul">
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0100s">Nescafé</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0150s">New York Pride</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0200s">Patreon</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0250s">Rivers Casino</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0300s">Snickers</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0350s">Southern Comfort</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0400s">The University of Alabama</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0450s">Twix</li>
                        <li className="wow animate__animated animate__fadeInLeft" data-wow-delay=".0500s">Wind Creek Hospitality</li>
                    </ul>
                </div>
            </section>
            <div className="section--separator wow"></div>
        </div>
    )
}

export default Clients;