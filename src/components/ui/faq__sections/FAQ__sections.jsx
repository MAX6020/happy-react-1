import "./FAQ__section.css"

const FAQ__sections = ({text,head,icon}) => {
    return (
        <>
        <div className="FAQ__section__flex">
            <div className="FAQ__section">
                <h2 className="FAQ__section__head">{head}</h2>
                <p className="FAQ__section__text">{text}</p>
            </div>
            <img className="FAQ__section__img" src={icon} alt="#" />
        </div>
        </>
     );
    
}
 
export default FAQ__sections;