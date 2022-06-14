import "animate.css";
import WOW from "wow.js";
import { useEffect, useState } from "react";

const Hero = () => {
    new WOW({
        live: false
    }).init();

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023);
    const updateMedia = () => setIsDesktop(window.innerWidth > 1023);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    })
    
    return (
        <main>
            <h1 className="hero--heading">
                <span className="hero--heading--span span1">The </span> 
                <span className="hero--heading--span span2">agency </span> 
                <span className="hero--heading--span span3">for </span><br/>
                <span className="hero--heading--span span4">what </span> 
                <span className="hero--heading--span span5">comes </span> 
                <span className="hero--heading--span span6">next.</span>
            </h1>
            {isDesktop ? (
            <div className="slideshow hero--slideshow wow animate__animated animate__slideInUp animate__delay-3s">
                <a href="https://www.redsquareagency.com/work">
                </a>
            </div>
            ) : (
                <div className="hero--slideshow no--animation">
                <a href="https://www.redsquareagency.com/work">
                </a>
            </div>
            )}
        </main>
    )
}

export default Hero;