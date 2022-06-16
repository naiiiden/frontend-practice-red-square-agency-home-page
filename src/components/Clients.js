import "animate.css";
import WOW from "wow.js";

const Clients = () => {
    new WOW().init();

    return (
        <div className="section--border--container">
            <div className="section--separator wow animate__animated animate__fadeInLeft "></div>
            <section className="clients--section">
                <h3 className="clients--section--heading wow animate__animated animate__fadeIn">Select Clients</h3>
                <div className="clients--ul--container">
                    <ul className="clients--ul">
                        <li className="wow animate__animated animate__fadeInLeft">Cherokee Casinos</li>
                        <li className="wow animate__animated animate__fadeInLeft">Flipboard</li>
                        <li className="wow animate__animated animate__fadeInLeft">Foxwoods</li>
                        <li className="wow animate__animated animate__fadeInLeft">Glanbia Nutritionals</li>
                        <li className="wow animate__animated animate__fadeInLeft">Google</li>
                        <li className="wow animate__animated animate__fadeInLeft">Hard Rock</li>
                        <li className="wow animate__animated animate__fadeInLeft">Hibbett Sports</li>
                        <li className="wow animate__animated animate__fadeInLeft">Hilton Worldwide</li>
                        <li className="wow animate__animated animate__fadeInLeft">Jack Daniel's</li>
                    </ul>
                    <ul className="clients--ul">
                        <li className="wow animate__animated animate__fadeInLeft">Nescafé</li>
                        <li className="wow animate__animated animate__fadeInLeft">New York Pride</li>
                        <li className="wow animate__animated animate__fadeInLeft">Patreon</li>
                        <li className="wow animate__animated animate__fadeInLeft">Rivers Casino</li>
                        <li className="wow animate__animated animate__fadeInLeft">Snickers</li>
                        <li className="wow animate__animated animate__fadeInLeft">Southern Comfort</li>
                        <li className="wow animate__animated animate__fadeInLeft">The University of Alabama</li>
                        <li className="wow animate__animated animate__fadeInLeft">Twix</li>
                        <li className="wow animate__animated animate__fadeInLeft">Wind Creek Hospitality</li>
                    </ul>
                </div>
            </section>
            <div className="section--separator wow animate__animated animate__fadeInLeft"></div>
        </div>
    )
}

export default Clients;