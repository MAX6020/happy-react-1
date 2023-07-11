import "./../style/Service.css"
import hero from "./../img/service-header-img.png"
import Service__section from "./../components/ui/service__section/Service__section"
import coaching from "./../icon/Coaching.svg"
import consultation from "./../icon/Consultation.svg"
import group from "./../icon/Group_Coaching_Session.svg"
import freatures from "./../img/freatures.png"
import Freatures__section from "./../components/ui/freatures__section/Freatures__section"
import talk from "./../icon/talk.svg"
import schedule from "./../icon/schedule.svg"
import online__consultation from "./../icon/online-consultation.svg"
import ready__to__start from "./../icon/ready-to-start.svg"
import plus from "./../icon/plus-circle.svg"
import FAQ__section from "./../components/ui/faq__sections/FAQ__sections"
import Btn from "./../components/ui/btn/Btn"

const Service = () => {
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
        <header className="service__hero">
            <div className="container">
                <div className="hero__flex">
                    <div className="hero__text">
                        <p className="hero-text__upper">
                            I can help you in these patricular areas.
                        </p>
                        <h1 className="hero-text__header">
                            I help people to <br />
                            discover their <br />
                            true potential
                        </h1>
                        <p className="hero-text__under">
                        I help people to discover their true potential and live a fulfilling <br />
                        life... Discover the simple 3 steps that I discovered to hack <br />
                        productivity. It just works and it is begin using backed by science. <br />
                        Wanna transform your life?
                        </p>
                    </div>
                    <div><img src={hero} alt="#" className="hero__img" /></div>
                </div>
            </div>
        </header>
        <div className="service">
            <div className="container">
                <h1 className="head service__heading">I can help you in these <br />particular areas.</h1>
                <div className="service__section">
                    <div className="service__section__left">
                        <Service__section
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        head="Group Coaching Sessions"
                        icon={group}
                        />
                        <Service__section 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        head="Consultation"
                        icon={consultation}
                        />
                    </div>
                    <div className="service__section__right">
                        <Service__section 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        head="Online course"
                        icon={coaching}
                        />
                        <Service__section 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam."
                        head="1:1 Coaching"
                        icon={coaching}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="freatures">
            <div className="container__freatures">
                <div className="fretures__heading">
                <p className="freatures__text__upper">How does it work?</p>
                <h2 className="freatures__text__head">Are you ready to <br />transform your life?</h2>
                <p className="freatures__text__under">
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit, sed do eiusmod tempor incididunt <br />
                    ut labore et dolore magna aliqua minim veniam.</p>
                </div>
                <div className="freatures__flex">
                    <div>
                        <ul className="freatures__ul">
                            <li className="freatures__li">
                                <Freatures__section
                                icon={talk}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Talk to me first"
                                />
                            </li>
                            <li className="freatures__li">
                                <Freatures__section
                                icon={schedule}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Schedule a meeting"
                                />
                            </li>
                            <li className="freatures__li">
                                <Freatures__section
                                icon={online__consultation}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Online consultation"
                                />
                            </li>
                            <li className="freatures__li">
                                <Freatures__section
                                icon={ready__to__start}
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                head="Ready to start? Let’s talk!"
                                />
                            </li>
                        </ul>
                    </div>
                    <div><img src={freatures} alt="#" /></div>
                </div>
            </div>
        </div>
        <div className="FAQ">
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
 
export default Service;