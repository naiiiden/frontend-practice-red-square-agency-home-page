import Arrow from "../images/arrow.svg";

const Work = () => {
    return (
        <div className="work--container">
            <a href="https://www.redsquareagency.com/work/" className="blur--bg"></a>
            <h3>All Projects</h3>
            <a href="https://www.redsquareagency.com/work/"><span>Work</span><img src={Arrow} alt=""/></a>
        </div>
    )
}

export default Work;