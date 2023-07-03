import "./Blog.css"

const blog = ({img,text,head}) => {
  return (
    <div className="blog">
      <img src={img} alt="#" />
      <h2 className="blog__head">{head}</h2>
      <p className="blog__text">{text}</p>
    </div>
  );
};

export default blog;
