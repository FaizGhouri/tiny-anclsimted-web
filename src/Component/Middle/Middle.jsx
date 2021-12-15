import React from 'react'
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import '../Middle/Middle.css'
import Slide from '../Carousel/Carousel';
import Founder from '../../Image/Cofounder.jpg';
import Sign from '../../Image/sign.jpg'
import Kawhi from '../../Image/kawhi.jpg';
import sandra from '../../Image/sandra.jpg';
import sammy from '../../Image/sammy.jpg'
import AOS from 'aos';
import Box1 from '../../Image/img-07.jpg';
import Box2 from '../../Image/img-08.jpg';
import Box3 from '../../Image/img-10.jpg';
import Box4 from '../../Image/img-09.jpg';
import Box5 from '../../Image/img-11.jpg';
import Box6 from '../../Image/img-12.jpg';
import Boy1 from '../../Image/img-15.jpg';
import Boy2 from '../../Image/img-14.jpg';
import Boy3 from '../../Image/img-13.jpg';
import Girl1 from '../../Image/img-16.jpg';
import Girl2 from '../../Image/img-17.jpg';
import CUP from '../../Image/ico-10.svg';
import HEART from '../../Image/ico-11.svg';
import BERIFCASE from '../../Image/ico-12.svg';
import BLUB from '../../Image/ico-13.svg';
import ADD from '../../Image/ico-14.svg';
import CountUp from 'react-countup';


const Middle = () => {

    AOS.init();

    return (

        <div className="Middle" >


            <Slide />



            <div className="Co-Founder-div">



                <div className='Louis-Div' data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <p className="Zero-One-Div">01</p>

                    <p className="About-Us">ABOUT US</p>

                    <p className="Owner-Name">Louis Frank</p>

                    <p className="Occupation">CO-FOUNDER AT EAGLEEYES</p>

                </div>



                <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">



                    <img src={Founder} alt="img" className="Co-img" />


                </div>

                <div data-aos="fade-left" data-aos-delay="400" data-aos-offset="600" data-aos-easing="ease-in-sine" data-aos-duration="500">


                    <div className="Main-About-div" >

                        <p className="About-Heading">About Us</p>

                        <p className="about-lines">

                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium dolorem laudanm, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas
                            sit aspernatur aut odit aut fugit, sed ttquia consequuntur magni
                            dolores eos qui ratione voluptatem sequi nesciunt.Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora incidunt
                            Fut labore et dolore magnam aliquam quaerat voluptatem.

                        </p>

                        <img src={Sign} alt="img" className="Sign-img" />

                    </div>

                </div>


            </div>

            <div className="Our-Team-div">

                <div className="Two-Img-Div" >

                    <div className="kawhi-Div" data-aos="fade-up" data-aos-delay="500" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="300">

                        <div>

                            <p className="Kawhi-Name">Kawhi Leonard</p>
                            <p className="Kawhi-Occupation">CREATIVE DIRECTOR</p>


                            <div className="Kawhi-Icon-Div">



                                <i class="fa fa-facebook fb-Icon" aria-hidden="true"></i>





                                <i class="fa fa-twitter" aria-hidden="true"></i>




                                <i class="fa fa-google-plus" aria-hidden="true"></i>





                                <i class="fa fa-pinterest-p pinterest" aria-hidden="true"></i>


                            </div>

                        </div>

                        <div className="Tend-Div">

                            We tend to think of Steam as tools for content
                            developers and tools for producers. We're just
                            always thinking.

                        </div>



                    </div>


                    <div className="Sandra-Sammy-Div">



                        <div className="Sammy-Div" data-aos="fade-up" data-aos-delay="500" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400">


                            <img src={sammy} alt="img" className="Sammy-Img" />


                            <p className="Man-Name">Sammy Filton</p>
                            <p className="Man-Occupation">STYLELIST</p>

                        </div>

                        <div className="Sandra-Div" data-aos="fade-up" data-aos-delay="500" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400" >


                            <img src={sandra} alt="img" className="Sandra-Img" />

                            <p className="Man-Name">Sandra Jackson</p>

                            <p className="Man-Occupation">ART DERECTOR</p>

                        </div>

                    </div>






                    <img src={Kawhi} alt="img" className="Kawhi-Img" data-aos="fade-left" data-aos-delay="300" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600" />




                </div>



                <div className="Team-02" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <p className="team">OUR TEAMS</p>

                    <p className="Two-Zero-div">02</p>


                    <button className="View-Btn">
                        <hr className="more-1" />
                        VIEW ALL
                        <hr className="more-2" />
                    </button>


                </div>


            </div>

            <div className="our-work-div" >

                <div className="Work-03" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <p className="Zero-Three-Text">03</p>

                    <p className="Our-Work-Text">OUR WORKS</p>

                    <div className="All-Btns-div">
                        <p className="All-btn">All</p>
                        <p className="Photo-Btn">Photography</p>
                        <p className="Branding-Btn">Brading</p>
                        <p className="Web-Btn">Web Design</p>
                        <p className="Motion-Btn">Motion Graphic</p>
                        <p className="illustration-Btn">Illustration</p>
                    </div>

                    <a href="#" className="View-Btn-1">
                        <hr className="more1-1" />
                        VIEW ALL
                        <hr className="more2-2" />
                    </a>


                </div>

                <div className="Grid " data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600" >

                    <div className="Grid-Box-1" >

                        <img src={Box1} alt="img" className="box-1" />



                        <div className="BI-Div">

                            <p className="AB-text">AMBER BOTTLE</p>
                            <p className="BI-text">Branding Identity</p>

                            <ul className="Icons">


                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="Grid-Box-1" >

                        <img src={Box2} alt="img" className="box-1" />



                        <div className="BI-Div">

                            <p className="AB-text">AMBER BOTTLE</p>
                            <p className="BI-text">Branding Identity</p>

                            <ul className="Icons">


                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div className="Grid-Box-1" >

                        <img src={Box3} alt="img" className="box-3" />



                        <div className="BI-Div-1">

                            <p className="AB-text-1">AMBER BOTTLE</p>
                            <p className="BI-text-1">Branding Identity</p>

                            <ul className="Icons-1">


                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>


                    <div className="Grid-Box-1" >

                        <img src={Box4} alt="img" className="box-4" />



                        <div className="BI-Div-2">

                            <p className="AB-text-2">AMBER BOTTLE</p>
                            <p className="BI-text-2">Branding Identity</p>

                            <ul className="Icons-2">


                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="Grid-Box-1" >

                        <img src={Box5} alt="img" className="box-5" />



                        <div className="BI-Div-3">

                            <p className="AB-text-3">AMBER BOTTLE</p>
                            <p className="BI-text-3">Branding Identity</p>

                            <ul className="Icons-3">


                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                    <div className="Grid-Box-1" >

                        <img src={Box6} alt="img" className="box-6" />



                        <div className="BI-Div-4">

                            <p className="AB-text-4">AMBER BOTTLE</p>
                            <p className="BI-text-4">Branding Identity</p>

                            <ul className="Icons-4">


                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="attach-anchor">
                                        <i class="fa fa-paperclip" aria-hidden="true"></i>
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>



                </div>


            </div>


            <div className="Our-Service-Div">


                <div className="Services-Div" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <div className="HBD-Div">

                        <div className="Handicraft-Div">

                            <i class="fa fa-scissors" aria-hidden="true"></i>

                            <p className="Handi-Text">

                                HANDICRAFTS

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>


                        <div className="Handicraft-Div">

                            <i class="fa fa-magic" aria-hidden="true"></i>

                            <p className="Handi-Text">

                                BRANDING DESIGN

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>


                        <div className="Handicraft-Div">

                            <i class="fa fa-mobile" aria-hidden="true"></i>


                            <p className="Handi-Text">

                                DIGITAL GRAPHICS

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>



                    </div>

                    <div className="HBD-Div">

                        <div className="Handicraft-Div">

                            <i class="fa fa-bullseye" aria-hidden="true"></i>

                            <p className="Handi-Text">

                                MARKETING

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>


                        <div className="Handicraft-Div">

                            <i class="fa fa-coffee" aria-hidden="true"></i>

                            <p className="Handi-Text">

                                COFFEE & RESTAURANT

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>


                        <div className="Handicraft-Div">

                            <i class="fa fa-home" aria-hidden="true"></i>

                            <p className="Handi-Text">

                                FURNITURE DESIGN

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>



                    </div>
                    <div className="HBD-Div">

                        <div className="Handicraft-Div">

                            <i class="fa fa-dot-circle-o" aria-hidden="true"></i>

                            <p className="Handi-Text">

                                AWESOME SUPPORT

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>


                        <div className="Handicraft-Div">

                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>

                            <p className="Handi-Text">

                                EASY TO CUSTOMIZE

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>


                        <div className="Handicraft-Div">

                            <i class="fas fa-medal"></i>

                            <p className="Handi-Text">

                                PROTECT SOLUTIONS

                            </p>

                            <p className="Craft-Text">

                                Phasellus ut condimentum diam,
                                eget tempus lorem. Morbi bibendum
                                est quis arcu posuere condimentum. Nullam justo eros.

                            </p>

                        </div>



                    </div>

                </div>


                <div className="Service-02" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <p className="team">OUR SERVICE</p>

                    <p className="four-Zero-div">04</p>


                    <button className="View-Btn-2">
                        <hr className="more-1-2" />
                        ORDER SERVICE
                        <hr className="more-2-2" />
                    </button>


                </div>

            </div>


            <div className="Testi-Div">

                <div className="Monials-Div" data-aos="fade-down-right" data-aos-easing="ease-in-sine" data-aos-duration="600">


                    <p className="Five-Zero-Text">05</p>

                    <p className="Testimonials-Text">TESTIMONIALS</p>

                    <button className="View-Btn-3">
                        <hr className="more-1-3" />
                        VIEW ALL
                        <hr className="more-2-3" />
                    </button>


                </div>

                <div className="CD-div" data-aos="zoom-in-left" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <div className="Img-Text-div">


                        <i class="fa fa-quote-left" aria-hidden="true"></i>

                        <p className="Self-Text">
                            “I am so happy because I found this Eagleeyes, and
                            it just made my life easier. Thanks so much for sharing”
                        </p>

                        <p className="Self-Name">Kawhi Leonard</p>

                        <p className="Self-Occupation">CREATIVE DIRECTOR</p>


                        <div className="Img-Div">

                            <img src={Boy1} alt="img" className="boy-img" />
                            <img src={Boy2} alt="img" className="boy-img" />
                            <img src={Boy3} alt="img" className="boy-img" />

                        </div>

                    </div>

                    <div>
                        <img src={Boy1} alt="img" className="boy-img-2" />
                    </div>


                </div>



            </div>


            <div className="Our-Blog-Div">

                <div className="BD-Div" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <div className="Best-Design-Div">

                        <div className="Girl-Img-Div">

                            <img src={Girl1} alt="img" className="girl-img" />

                        </div>

                        <p className="WA-Text">by Leonard, 1 week ago</p>

                        <div className="WD-div">

                            <p className="TB-Div">We Do The Best Design</p>

                            <p className="WD-Text">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa officia deserunt mollitid est
                                laborum. Sed ut perspiciatis unde qui omnis
                                ste natus error sit voluptatem.

                            </p>


                            <a href='#' className='Cont-btn' >CONTINUE <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        </div>

                    </div>


                    <div className="Best-Design-Div">


                        <div className="WD-div-2">

                            <p className="TB-Div">Friendly For All Devices</p>

                            <p className="WD-Text-2">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa officia deserunt mollitid est
                                laborum. Sed ut perspiciatis unde qui omnis
                                ste natus error sit voluptatem.

                            </p>


                            <a href='#' className='Cont-btn' >CONTINUE <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        </div>

                        <p className="WA-Text-2">by Leonard, 1 week ago</p>

                        <div className="Girl-Img-Div">

                            <img src={Girl2} alt="img" className="girl-img-2" />

                        </div>

                    </div>

                </div>

                <div className="Blog-Div" data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <p className="team">OUR BLOGS</p>

                    <p className="Two-Zero-div">06</p>


                    <button className="View-Btn-4">
                        <hr className="more-1-4" />
                        VIEW ALL
                        <hr className="more-2-4" />
                    </button>


                </div>

            </div>


            <div className='Pricing-Div'>

                <div className='Pricing-Text-Div' data-aos="fade-down-right" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <p className='Seven-Zero-Text'>07</p>

                    <p className='Pricing-Text'>PRICING</p>

                    <button className="View-Btn-5">
                        <hr className="more-1-5" />
                        VIEW ALL
                        <hr className="more-2-5" />
                    </button>

                </div>

                <div className='Pricing-List-Div'>

                    <div className='Pricing-List-1' data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="600">

                        <div className='Price-Mon-Div'>

                            <p className='basic-text'><sup className='super-text'>$</sup>135</p>

                            <p className='Month-Text'>/month</p>

                        </div>

                        <p className='bas-Text'>BASIC</p>

                        <hr className='hr-1' />

                        <p className='Outline-Text'>One day trial</p>
                        <p className='Outline-Text'>No supporter</p>
                        <p className='Outline-Text'>Free 5 lesons</p>
                        <p className='Outline-Text'>Limited courses</p>
                        <p className='Outline-Text'>Limited registrated user</p>

                        <hr className='hr-1' />

                        <button className='Select-Btn'>SELECT PLAN</button>

                    </div>
                    <div className='Pricing-List-1' data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-sine" data-aos-duration="600">

                        <div className='Price-Mon-Div'>

                            <p className='basic-text'><sup className='super-text'>$</sup>135</p>

                            <p className='Month-Text'>/month</p>

                        </div>

                        <p className='bas-Text'>BASIC</p>

                        <hr className='hr-1' />

                        <p className='Outline-Text'>One day trial</p>
                        <p className='Outline-Text'>No supporter</p>
                        <p className='Outline-Text'>Free 5 lesons</p>
                        <p className='Outline-Text'>Limited courses</p>
                        <p className='Outline-Text'>Limited registrated user</p>

                        <hr className='hr-1' />

                        <button className='Select-Btn'>SELECT PLAN</button>

                    </div>
                    <div className='Pricing-List-1' data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-sine" data-aos-duration="600">

                        <div className='Price-Mon-Div'>

                            <p className='basic-text'><sup className='super-text'>$</sup>135</p>

                            <p className='Month-Text'>/month</p>

                        </div>

                        <p className='bas-Text'>BASIC</p>

                        <hr className='hr-1' />

                        <p className='Outline-Text'>One day trial</p>
                        <p className='Outline-Text'>No supporter</p>
                        <p className='Outline-Text'>Free 5 lesons</p>
                        <p className='Outline-Text'>Limited courses</p>
                        <p className='Outline-Text'>Limited registrated user</p>

                        <hr className='hr-1' />

                        <button className='Select-Btn'>SELECT PLAN</button>

                    </div>

                </div>

            </div>


            <div className='Svg-Icon-Div'>

                <div className='cup-div' data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <img src={CUP} alt='img' className='cup-img' />

                    <p className='coffee-cup'>COFFEE CUPS</p>

                    <p className='Zero-text'><CountUp start={0} end={268} duration={2} delay={3}/></p>

                </div>


                <div className='cup-div' data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <img src={HEART} alt='img' className='cup-img' />

                    <p className='coffee-cup'>HAPPY CLIENTS</p>

                    <p className='Zero-text'><CountUp start={0} end={346} duration={2} delay={3}/></p>

                </div>


                <div className='cup-div' data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <img src={BERIFCASE} alt='img' className='cup-img' />

                    <p className='coffee-cup'>PROJECTS</p>

                    <p className='Zero-text'><CountUp start={0} end={100} duration={2} delay={3}/></p>

                </div>


                <div className='cup-div' data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <img src={BLUB} alt='img' className='cup-img' />

                    <p className='coffee-cup'>WORKING DAYS</p>

                    <p className='Zero-text'><CountUp start={0} end={492} duration={2} delay={3}/></p>

                </div>


                <div className='cup-div' data-aos="fade-up" data-aos-delay="500" data-aos-easing="ease-in-sine" data-aos-duration="600">

                    <img src={ADD} alt='img' className='cup-img' />

                    <p className='coffee-cup'>TEAM MEMBERS</p>

                    <p className='Zero-text'><CountUp start={0} end={90} duration={2} delay={3}/></p>

                </div>

            </div>



            <ScrollToTop />


        </div>

    )
}

export default Middle;