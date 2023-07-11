import "./Freatures__section.css"

const Freatures__section = ({text,head,icon}) => {
    return ( 
        <>
        <div className="freatures__section__flex">
            <div><img className="freatures__section__img" src={icon} alt="" /></div>
            <div>
                <h2 className="freatures__section__head">{head}</h2>
                <p className="freatures__section__text">{text}</p>
            </div>
        </div>
        </>
     );
}
 
export default Freatures__section;