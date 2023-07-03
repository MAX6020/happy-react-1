import "./../style/Main.css"
import hero from "./../img/hero.png"
import Introduction__section from "../components/ui/introduction__section/Introduction__section"
import coaching from "./../icon/Coaching.svg"
import consultation from "./../icon/Consultation.svg"
import group from "./../icon/Group_Coaching_Session.svg"
import Reviwers from "../components/ui/reviewers/Reviewers"
import jane__one from "./../img/jane__one.png"
import jane__two from "./../img/jane__two.png"
import catherina from "./../img/catherina.png"
import star from "./../icon/Star.svg"
import grey__star from "./../icon/grey__Star.svg"
import Btn from "../components/ui/btn/Btn"
import Blog from "../components/ui/blog/Blog"
import blog__one from "./../img/blog__one.png"
import blog__two from "./../img/blog__two.png"
import blog__three from "./../img/blog__three.png"
import freeguide__img from "./../img/free-guide__img.png"
import section__img from "./../img/section__img.png"

const Main = () => {
  return (
    <>
        <header className="header">
          <div className="container">
            <div className="hero">
              <div className="hero-text">
                <p className="hero-text__upper">
                  Proven strategies backed by scince succes
                </p>
                <h1 className="hero-text__header">
                  Live life at the <br></br>
                  full potential
                </h1>
                <p className="hero-text__under">
                  i help people to discover their true potential and live fulfilling
                  <br></br>
                  life... Discover the simple 3 steps that i discovered to hack
                  <br></br>
                  produvrivity. It just works and it is befin using backed by
                  science.<br></br>
                  Wanna transform your life?
                </p>
                <Btn text="Get your free guide now"></Btn>
              </div>
              <div className="hero-img">
                <img src={hero}></img>
              </div>
            </div>
          </div>
        </header>
        <div className="introduction">
            <div className="container-introduction">
                <div className="introduction__upper">
                    <h1 className="heading">
                        I cav help you in these <br />
                        particular areas.
                    </h1>
                    <p className="introduction-text__upper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                    do eiusmod tempor incididunt ut labore et dolore magna <br />
                    aliqua minim veniam.<br />

                    Sed ut perspiciatis unde omnis iste natus error sit <br />
                    voluptatem accusantium doloremque laudantium, totam <br />
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis <br />
                    et quasi architecto beatae vitae dicta sunt explicabo. <br />
                    </p>
                </div>
                <div className="introduction__under">
                    <Introduction__section 
                    img={coaching} 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam." 
                    head="1:1 Coaching"/>
                    <Introduction__section 
                    img={consultation} 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam." 
                    head="Consultation"/>
                    <Introduction__section 
                    img={group} 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."  
                    head="Group Coaching Sessions"/>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="container__reviews">
                <h1 className="heading head-reviews">
                    Hear out what my <br />
                    clients say about me.
                </h1>
                <div className="reviewers">
                    <Reviwers
                    text="I gained so much confidence in my ability to connect and deepen my relationships with people."
                    name="Jane"
                    img={jane__one}
                    icon={star}
                    />
                    <Reviwers
                    text="I gained so much confidence in my ability to connect and deepen my relationships with people."
                    name="Catherina"
                    img={catherina}
                    icon={grey__star}
                    />
                    <Reviwers
                    text="I gained so much confidence in my ability to connect and deepen my relationships with people."
                    name="Jane"
                    img={jane__two}
                    icon={grey__star}
                    />
                </div>
            </div>
        </div>
        <div className="blogs">
            <div className="container">
                <div className="blogs__flex">
                    <h1 className="heading head__blogs">Stay Motivated, read the <br /> weekly blog articles.</h1>
                    <div className="blogs__row">
                        <Blog 
                        img={blog__one} 
                        head="Balancing your love and work life." 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."></Blog>
                        <Blog 
                        img={blog__two} 
                        head="A short break from Social Media is important." 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."></Blog>
                        <Blog 
                        img={blog__three} 
                        head="How to be 1% Better Every Day" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."></Blog>
                    </div>
                    <Btn text="Read more blogs"></Btn>
                </div>
            </div>
        </div>
        <div className="free-guide">
            <div className="container">
                <div className="free-guide__flex">
                    <div className="free-guide__text">
                        <h1 className="heading head__free-guide">
                        Don’t miss out on my <br />
                        ‘Live life at the full <br />
                        potential’ free guide <br />
                        </h1>
                        <p className="free-guide__p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                        elit, sed do eiusmod tempor incididunt ut labore et <br />
                        dolore magna aliqua minim veniam.
                        </p>
                        <p className="small-text free-guide__small-p">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br />
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta <br />
                        sunt explicabo.
                        </p>
                        <Btn text="Get your free guide now"/>
                    </div>
                    <div className="free guide__img"><img src={freeguide__img} alt="" /></div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container">
                <div className="section__background">
                    <div className="section__text">
                        <h1 className="section__head">Get 15-Minutes Complimentary online session.</h1>
                        <p className="section__p">Limited Period Offer. Claim Now.</p>
                        <Btn text="Book now"/>
                    </div>
                    <div className="section__img">
                        <img src={section__img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Main;
