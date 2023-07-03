import "./Reviewers.css"

const Reviewers = ({text,name,img,icon}) => {
    return ( 
        <div className="reviewers__background">
            <div className="reviewers__padding">
                <p className="review__text">{text}</p>
                <h2 className="review__name">{name}</h2>
                <img className="img" src={img} alt="" />
                <div className="star">
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Reviewers;