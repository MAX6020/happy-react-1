import "./../style/Freeguide.css"
import Btn from "./../components/ui/btn/Btn"
import freeguide from "./../img/free-guide__img.png"
import Quote__sections from "../components/ui/quote__sections/Quote__section";
import quote__avatar from "./../img/Avatar.png"
import star from "./../icon/Star.svg"
import Freatures__section from "../components/ui/freatures__section/Freatures__section";
import online__consultation from "./../icon/freeguide__fratures__consultation.svg"
import ready__to__start from "./../icon/freeguide__freatures__ready-to-talk.svg"
import video__player from "./../img/Video__player.png"
import allstar from "./../icon/Stars.svg"

const Freeguide = () => {
    return ( 
        <>
        <header className="freeguide__hero">
            <div className="container">
                <div className="freeguide__hero__flex">
                    <div className="freeguide__hero__left">
                        <h1 className="freeguide__hero__head">
                            Results that speak for <br /> 
                            themselves
                        </h1>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                            elit, sed do eiusmod tempor incididunt ut labore <br />
                            et dolore magna aliqua minim veniam.
                        </p>
                        <input className="freeguide__hero__input" type="text" placeholder="Name"/>
                        <input className="freeguide__hero__input" type="text" placeholder="Enter your email"/>
                        <p className="freeguide__hero__smalltext">We care about your data in our <a className="freeguide__hero__a" href="">privacy policy</a></p>
                        <button className="freeguide__hero__btn">Get free guide</button>
                    </div>
                    <div className="freeguide__hero__right">
                        <img className="freeguide__hero__img" src={freeguide} alt="" />
                    </div>
                </div>
            </div>
        </header>
        <div className="freeguide__section">
            <div className="container">
                <div className="freeguide__section__flex">
                    <div>
                        <p className="smalltext">Testimonials</p>
                        <h1 className="freeguide__head">Results that speak for themselves</h1>
                    </div>
                    <button className="freeguide__section__btn">Get started</button>
                </div>
            </div>
        </div>
        <div className="freeguide__quote__section">
            <div className="container__quote">
                <div className="freeguide__quote__section__upper">
                    <Quote__sections
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    head="Naam"
                    img={quote__avatar}
                    icon={star}
                    smalltext="Bedrijf"
                    />
                    <Quote__sections
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    head="Naam"
                    img={quote__avatar}
                    icon={star}
                    smalltext="Bedrijf"                
                    />
                </div>
                <div className="freeguide__quote__section__under">
                    <Quote__sections
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    head="Naam"
                    img={quote__avatar}
                    icon={star}
                    smalltext="Bedrijf"
                    />
                    <Quote__sections
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    head="Naam"
                    img={quote__avatar}
                    icon={star}
                    smalltext="Bedrijf"
                    />
                </div>
            </div>
        </div>
        <div className="freeguide__freatures__section">
            <div className="container">
                <div className="freeguide__freatures__flex">
                    <div className="freeguide__freatures__heading">
                        <p className="smalltext">How does it work?</p>
                        <h1 className="freeguide__head">
                            Are you ready to <br />
                            transform your life?
                        </h1>
                        <p className="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                            do eiusmod tempor incididunt ut labore et dolore magna <br />
                            aliqua minim veniam.
                        </p>
                    </div>
                    <div>
                        <ul className="freeguide__freatures__ul">
                            <li className="freeguide__freatures__li">
                                <Freatures__section
                                icon={online__consultation}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Online consultation"
                                />
                            </li>
                            <li className="freeguide__freatures__li">
                                <Freatures__section
                                icon={ready__to__start}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Ready to start? Let’s talk!"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="freeguide__freatures__video">
                    <img className="freeguide__freatures__img" src={video__player} alt="" />
                </div>
            </div>
        </div>
        <div className="freeguide__cta">
            <div className="container__cta">
                <div className="freeguide__cta__flex">
                    <h1 className="head">
                        Don’t miss out on my <b className="green__head">‘Live life at the full potential’</b> free guide
                    </h1>
                    <p className="freeguide__cta__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                        eiusmod tempor incididunt ut labore et dolore magna aliqua minim <br />
                        veniam. Sed ut perspiciatis unde omnis iste natus error sit <br />
                        voluptatem accusantium doloremque laudantium.
                    </p>
                    <div className="freeguide__cta__btn__margin"><Btn text="Download my free guide"/></div>
                    <p className="smalltext">More than 100+ 5 star reviews</p>
                    <img className="freeguide__cta__star" src={allstar} alt="" />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Freeguide;