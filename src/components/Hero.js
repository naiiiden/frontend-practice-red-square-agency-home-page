import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";


const Hero = () => {
    return (
        <main>
            <h1 className="hero--heading">
                <span className="hero--heading--span span1">The </span> 
                <span className="hero--heading--span span2">agency </span> 
                <span className="hero--heading--span span3">for </span> 
                <span className="hero--heading--span span4">what </span> 
                <span className="hero--heading--span span5">comes </span> 
                <span className="hero--heading--span span6">next.</span>
            </h1>
            <div className="hero--slideshow">
                <a href="#">
                    <img src={img1} alt=""/>
                </a>
            </div>
        </main>
    )
}

export default Hero;