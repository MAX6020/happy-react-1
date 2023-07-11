import "./Rate__section.css"

const Rate__section = ({rate,text,name,img}) => {
    return ( 
        <>
        <div className="rate__background">
            <div className="rate__padding">
                <h1 className="rate">{rate}</h1>
                <p className="rate__text">{text}</p>
                <h2 className="rate__name">{name}</h2>
                <img className="rate__img" src={img} alt="" />
            </div>
        </div>
        </>
     );
}
 
export default Rate__section;