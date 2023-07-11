import "../style/Salepages.css"
import Btn from "../components/ui/btn/Btn"
import hero from "../img/salepage__hero.png"
import About__freatures__section from "../components/ui/about__freatures__sections/About__freatures__section"
import schedule from "../icon/schedule.svg"
import bell from "../icon/bell.svg"
import medal from "../icon/medal.svg"
import ready__to__start from "../icon/ready-to-start.svg"
import Freatures__section from "../components/ui/freatures__section/Freatures__section";
import online__consultation from "./../icon/freeguide__fratures__consultation.svg"
import video__player from "./../img/Video__player.png"
import ready__to__talk from "./../icon/freeguide__freatures__ready-to-talk.svg"
import Quote__sections from "../components/ui/quote__sections/Quote__section";
import quote__avatar from "./../img/Avatar.png"
import star from "./../icon/Star.svg"
import plus from "../icon/plus.svg"
import chrest from "../icon/chrest.svg"
import section__img from "./../img/section__img.png"
import guarantee from "../img/guarantee.svg"
import plus__circle from "../icon/plus-circle.svg"
import FAQ__section from "../components/ui/faq__sections/FAQ__sections"

const Salepages = () => {
    [...document.querySelectorAll('.FAQ__section__flex')].forEach(function(item){
        const openbtn = item.querySelector('.FAQ__section__img')
        const activetext = item.querySelector('.FAQ__section__text')

        openbtn.addEventListener('click', (event)=>{
            event.stopPropagation()
            activetext.classList.add("active");
        })
    })
    return ( 
        <>
        <header className="salepage__hero">
            <div className="container">
                <div className="salepage__gero__flex">
                    <div className="salepage__hero__heading">
                        <p className="smalltext">Proven strategies backed by science for success.</p>
                        <h1 className="salepage__hero__head">Self Esteem <br />Therapy</h1>
                        <p className="salepage__hero__text">
                        I help people to discover their true potential and live a fulfilling <br />
                        life... Discover the simple 3 steps that I discovered to hack <br />
                        productivity. It just works and it is begin using backed by science. <br />
                        Wanna transform your life?
                        </p>
                        <Btn text="Claim your spot"/>
                    </div>
                    <div >
                        <img className="salepage__hero__img" src={hero} alt="" />
                    </div>
                </div>
            </div>
        </header>
        <div className="salepage__freatures">
            <div className="container">
                <p className="salepage__center__smalltext">How does it work?</p>
                <h1 className="salepage__center__heading">Are you ready to transform your life?</h1>
                <p className="salepage__freatures__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua minim veniam.
                </p>
                <div className="salepage__freatures__block">
                    <About__freatures__section
                    icon={ready__to__start}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={schedule}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={ready__to__start}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
                <div className="salepage__freatures__block">
                    <About__freatures__section
                    icon={medal}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={bell}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                    <About__freatures__section
                    icon={ready__to__start}
                    head="Ready to start? Let’s talk!"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                </div>
            </div>
        </div>
        <div className="salepage__freatures__section">
            <div className="container">
                <div className="salepage__freatures__flex">
                    <div className="salepage__freatures__head">
                        <p className="smalltext">How does it work?</p>
                        <h1 className="salepage__head">
                            Are you ready to <br />
                            transform your life?
                        </h1>
                        <p className="salepage__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                            do eiusmod tempor incididunt ut labore et dolore magna <br />
                            aliqua minim veniam.
                        </p>
                    </div>
                    <div>
                        <ul className="salepage__freatures__ul">
                            <li className="salepage__freatures__li">
                                <Freatures__section
                                icon={online__consultation}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Online consultation"
                                />
                            </li>
                            <li className="salepage__freatures__li">
                                <Freatures__section
                                icon={ready__to__talk}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Ready to start? Let’s talk!"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="salepage__freatures__video">
                    <img className="salepage__freatures__img" src={video__player} alt="" />
                </div>
            </div>
        </div>
        <div className="salepage__section">
            <div className="container">
                <div className="salepage__section__flex">
                    <div>
                        <p className="smalltext">Testimonials</p>
                        <h1 className="salepage__head">Results that speak for themselves</h1>
                    </div>
                    <button className="salepage__section__btn">Get started</button>
                </div>
            </div>
        </div>
        <div className="salepage__quote__section">
            <div className="container__quote">
                <div className="salepage__quote__section__upper">
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
                <div className="salepage__quote__section__under">
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
        <div className="salepage__qual">
            <div className="container__qual">
                <p className="salepage__center__smalltext">This is not for everyone!</p>
                <h1 className="salepage__center__heading">This program is <br />perfect for you if...</h1>
                <div className="salepage__qual__flex">
                    <div className="salepage__qual__not">
                        <h2 className="salepage__qual__head">This is <b className="underline">NOT</b> for you if...</h2>
                        <ul className="salepage__qual__ul">
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={chrest} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={chrest} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={chrest} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={chrest} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                        </ul>
                    </div>
                    <div className="salepage__qual__your">
                        <h2 className="salepage__qual__head">This is for you if...</h2>
                        <ul className="salepage__qual__ul">
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={plus} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={plus} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={plus} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                            <li className="salepage__qual__li"><img className="salepage__qual__icon" src={plus} alt="" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="salepage__section">
            <div className="container">
                <div className="salepage__section__background">
                    <div className="salepage__section__text">
                        <h1 className="salepage__section__head">Get 15-Minutes Complimentary online session.</h1>
                        <p className="salepage__section__p">Limited Period Offer. Claim Now.</p>
                        <Btn text="Book now"/>
                    </div>
                    <div className="salepage__section__img">
                        <img src={section__img} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="salepage__guarantee">
            <div className="container">
                <div className="salepage__guarante__flex">
                    <img className="salepage__guarante__img" src={guarantee} alt="" />
                    <h2 className="salepage__guarante__head">Guarantee</h2>
                    <p className="salepage__guarante__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                    sed do eiusmod tempor incididunt ut labore et dolore <br />
                    magna aliqua minim veniam.
                    </p>
                </div>
            </div>
        </div>
        <div className="salepage__FAQ">
            <div className="container">
                <h1 className="head">Good to know.</h1>
                <p className="FAQ__under__head">Everything you need to know about the my services.</p>
                <ul className="FAQ__ul">
                    <li className="FAQ__li">
                        <FAQ__section
                        head="How long does the coaching process take?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus__circle}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="What if I wanted to end my coaching engagement?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus__circle}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="Can I change through coaching?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus__circle}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="How often do we meet?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus__circle}
                        />
                    </li>
                </ul>

            </div>
            <div className="FAQ__questions__background">
                <div className="container">
                    <h2 className="FAQ__head">Still have questions?</h2>
                    <p className="FAQ__questions__text">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    <div className="btn__questions">
                    <Btn text="Get in touch"/>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Salepages;