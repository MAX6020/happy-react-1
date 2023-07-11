import "./Quote__section.css"

const Quote__sections = ({img,icon,text,smalltext,head}) => {
    return ( 
        <>
        <div className="quote__section__backgruond">
            <div className="quote__section__padding">
                <p className="quote__section__text">{text}</p>
                <img className="quote__section__img" src={img} alt="#" />
                <h2 className="quote__section__name">{head}</h2>
                <p className="quote__section__smalltext">{smalltext}</p>
                <div className="quote__section__star">
                    <img className="quote__section__icon" src={icon} alt="" />
                    <img className="quote__section__icon" src={icon} alt="" />
                    <img className="quote__section__icon" src={icon} alt="" />
                    <img className="quote__section__icon" src={icon} alt="" />
                    <img className="quote__section__icon" src={icon} alt="" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Quote__sections;