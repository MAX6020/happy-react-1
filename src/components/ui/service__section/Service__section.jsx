import "./Service__section.css"

const Service__section = ({text,icon,head}) => {
    return ( 
        <div className="service__section__background">
            <div className="service__section__flex">
                <img className="service__section__img" src={icon} alt="#" />
                <h2 className="service__section__head">{head}</h2>
                <p className="service__section__p">{text}</p>
            </div>
        </div>
     );
}
 
export default Service__section;