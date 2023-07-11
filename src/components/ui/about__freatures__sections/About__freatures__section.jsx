import "./About__freatures__section.css"

const About__freatures__section = ({icon,head,text}) => {
    return ( 
        <>
        <div className="about__freatures__section">
            <img className="about__freatures__img" src={icon} alt="" />
            <h2 className="about__freatures__head">{head}</h2>
            <p className="about__freatures__text">{text}</p>
        </div>
        </>
     );
}
 
export default About__freatures__section;