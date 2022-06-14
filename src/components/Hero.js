import "animate.css";
import WOW from "wow.js";

const Hero = () => {
    new WOW().init();
    
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
            <div className="slideshow hero--slideshow wow animate__animated animate__slideInUp animate__delay-3s">
                <a href="https://www.redsquareagency.com/work">
                </a>
            </div>
        </main>
    )
}

export default Hero;