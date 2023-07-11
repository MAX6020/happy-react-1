import "./../style/About.css"
import about__hero from "./../img/about__hero.png"
import Btn from "../components/ui/btn/Btn"
import layers from "../icon/comp__layers.svg"
import sisyphus from "../icon/comp__sisyphus.svg"
import circooles from "../icon/comp__circooles.svg"
import catalog from "../icon/comp__catalog.svg"
import quotient from "../icon/comp__quotient.svg"
import Rate__section from "../components/ui/rate__sections/Rate__section"
import jane from "../img/jane__one.png"
import catherina from "../img/catherina.png"
import About__freatures__section from "../components/ui/about__freatures__sections/About__freatures__section"
import schedule from "../icon/schedule.svg"
import bell from "../icon/bell.svg"
import medal from "../icon/medal.svg"
import ready__to__start from "../icon/ready-to-start.svg"
import plus from "../icon/plus-circle.svg"
import FAQ__section from "../components/ui/faq__sections/FAQ__sections"

const About = () => {
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
        <header className="about__hero">
            <div className="container__hero">
                <div className="about__hero__flex">
                    <div className="about__hero__heading">
                        <p className="about__smalltext">Proven strategies backed by science for success.</p>
                        <h1 className="about__hero__head">About me</h1>
                        <p className="about__hero__text">
                            I help people to discover their true potential and live a fulfilling <br />
                            life... Discover the simple 3 steps that I discovered to hack <br />
                            productivity. It just works and it is begin using backed by science. <br />
                            Wanna transform your life?
                        </p>
                        <Btn text="Get your free guide now"/>
                    </div>
                    <div className="about__hero__img">
                        <img src={about__hero} alt="" />
                    </div>
                </div>
            </div>
        </header>
        <div className="about__social">
            <div className="container__social">
                <div className="about__social__flex">
                    <p className="about__social__text">From startups to the world’s largest companies</p>
                    <div className="about__social__img">
                        <img className="about__social__comp" src={layers} alt="" />
                        <img className="about__social__comp" src={sisyphus} alt="" />
                        <img className="about__social__comp" src={circooles} alt="" />
                        <img className="about__social__comp" src={catalog} alt="" />
                        <img className="about__social__comp" src={quotient} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="about__rate">
            <div className="container__rate">
                <h1 className="about__rate__head">
                    Hear out what my <br />
                    clients say about me.
                </h1>
                <div className="about__rate__block">
                    <Rate__section
                    text={"I gained so much confidence in my ability to connect and deepen my relationships with people. "}
                    rate="5/5"
                    img={jane}
                    name="Jane"
                    />
                    <Rate__section
                    text="“Denise helped me organise my diet. Highly recommend her services!”"
                    rate="5/5"
                    img={catherina}
                    name="Catherina"
                    />
                    <Rate__section
                    text={"I gained so much confidence in my ability to connect and deepen my relationships with people. "}
                    rate="5/5"
                    img={jane}
                    name="Jane"
                    />
                </div>
            </div>
        </div>
        <div className="about__freatures">
            <div className="container">
                <p className="about__freatures__smalltext">How does it work?</p>
                <h1 className="about__freatures__heading">Are you ready to transform your life?</h1>
                <p className="about__freatures__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua minim veniam.
                </p>
                <div className="about__freatures__block">
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
                <div className="about__freatures__block">
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
        <div className="about__FAQ">
            <div className="container">
                <h1 className="head">Good to know.</h1>
                <p className="FAQ__under__head">Everything you need to know about the my services.</p>
                <ul className="FAQ__ul">
                    <li className="FAQ__li">
                        <FAQ__section
                        head="How long does the coaching process take?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="What if I wanted to end my coaching engagement?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="Can I change through coaching?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
                        />
                    </li>
                    <li className="FAQ__li">
                        <FAQ__section
                        head="How often do we meet?"
                        text="Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
                        icon={plus}
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
 
export default About;