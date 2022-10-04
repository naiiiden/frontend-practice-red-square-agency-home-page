import Arrow from "../images/arrow.svg";

const Work = () => {
    return (
        <div className="work--container">
            <a href="https://www.redsquareagency.com/work/" className="blur--bg" aria-label="See our projects"></a>
            <h3>All Projects</h3>
            <span href="https://www.redsquareagency.com/work/">Work<img src={Arrow} alt=""/></span>
        </div>
    )
}

export default Work;