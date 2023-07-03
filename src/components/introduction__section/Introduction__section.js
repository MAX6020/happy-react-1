const Section = ({img,head,text}) => {
  return (
    <div className="introduction-padding__under">
      <img className="introduction__icon" src={img} alt="#" />
      <h2 className="introduction__head">{head}</h2>
      <p className="introduction__text">{text}</p>
    </div>
  );
};

export default Section;
