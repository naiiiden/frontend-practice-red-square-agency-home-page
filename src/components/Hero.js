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
                <span className="hero--heading--span span3">for </span><br/>
                <span className="hero--heading--span span4">what </span> 
                <span className="hero--heading--span span5">comes </span> 
                <span className="hero--heading--span span6">next.</span>
            </h1>
            <div className="hero--slideshow">
                <a href="#">
                    {/* <img src={img4} alt="" className="img img4"/>
                    <img src={img12} alt="" className="img img12"/>
                    <img src={img10} alt="" className="img img10"/>
                    <img src={img9} alt="" className="img img9"/>
                    <img src={img11} alt="" className="img img11"/>
                    <img src={img2} alt="" className="img img2"/>
                    <img src={img1} alt="" className="img img1"/>
                    <img src={img6} alt="" className="img img6"/>
                    <img src={img3} alt="" className="img img3"/>
                    <img src={img7} alt="" className="img img7"/>
                    <img src={img5} alt="" className="img img5"/>
                    <img src={img8} alt="" className="img img8"/> */}

                </a>
            </div>
        </main>
    )
}

export default Hero;