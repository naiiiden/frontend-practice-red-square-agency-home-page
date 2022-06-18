import Arrow from "../images/arrow.svg";

const Work = () => {
    return (
        <div className="work--container">
            <div className="blur--bg"></div>
            <h3>All Projects</h3>
            <a href="https://www.redsquareagency.com/work/"><span>Work</span><img src={Arrow} alt=""/></a>
        </div>
    )
}

export default Work;