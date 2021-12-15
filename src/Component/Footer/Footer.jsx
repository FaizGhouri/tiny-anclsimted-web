import React from 'react';
import '../Footer/Footer.css';
import Fade from 'react-reveal/Fade';


const Footer = () => {

    return (

        <div className='Main-Footer-Div'>

            <div className='Footer-div'>

                <div className='Address-Send-Div'>


                    <Fade left>

                        <div className="Address-div">


                            <div className="Logo-1">

                                <span className="hash-1">#</span> EAGLEEYES

                            </div>

                            <p className='Excepteur-Text'>

                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa officia deserunt mollitid est
                                laborum. Sed ut perspiciatis unde qui omnis
                                iste natus error sit voluptatem.

                            </p>

                            <hr className='address-hr' />

                            <p className='Address-Text'><span className='A-text'>A : </span> No 40 Baria Street 133/2 NewYork <br /> City, <br /> NY, United States</p>

                            <p className='Email-Text'><span className='E-Text'>E:</span> info.contact@gmail.com</p>

                            <p className='Phone-Text'><span className='P-Text'>P:</span> (00) 123 456 789</p>

                        </div>

                        <div className='Leonard-div'>

                            <p className='Leonard-text'>

                                <span className='twitter-Span'>

                                    <i class="fa fa-twitter" aria-hidden="true"></i>

                                    @Leonard design

                                </span> &nbsp;

                                I am so happy because I found this EAGLEEYES, and
                                it just made EAGLEEYES easier. Thanks so much for sharing
                            </p>


                            <p className='Leonard-text'>

                                <span className='twitter-Span'>

                                    <i class="fa fa-twitter" aria-hidden="true"></i>

                                    @Leonard design

                                </span> &nbsp;

                                I am so happy because I found this EAGLEEYES, and
                                it just made EAGLEEYES easier. Thanks so much for sharing
                            </p>


                            <p className='Leonard-text'>

                                <span className='twitter-Span'>

                                    <i class="fa fa-twitter" aria-hidden="true"></i>

                                    @Leonard design

                                </span> &nbsp;

                                I am so happy because I found this EAGLEEYES, and
                                it just made EAGLEEYES easier. Thanks so much for sharing
                            </p>

                        </div>

                    </Fade>

                    <Fade right>


                        <div className='Send-Message-Div'>

                            <p className='We-Text'>
                                We will love to hear <br /> from you!
                            </p>

                            <div className='Inputs-Div'>

                                <input className='Name-input' type="text" placeholder='Name' />

                                <input className='Name-input' type="email" placeholder='Email' />

                                <input className='Name-Comment' type="text" placeholder='Comment' />

                            </div>


                            <button className='SM-Btn'>SEND MESSAGES</button>

                        </div>

                    </Fade>

                </div>

                <Fade bottom>

                    <hr className='gap-hr' />

                    <div className='ACTPSC-Div' >

                        <button className='About-Btn'>About</button>
                        <hr className='Btn-hr' />
                        <button className='About-Btn'>Customer Service</button>
                        <hr className='Btn-hr' />
                        <button className='About-Btn'>Terms & Conditions</button>
                        <hr className='Btn-hr' />
                        <button className='About-Btn'>Privacy Police</button>
                        <hr className='Btn-hr' />
                        <button className='About-Btn'>Site Map</button>
                        <hr className='Btn-hr' />
                        <button className='About-Btn'>Contact</button>

                    </div>

                    <div className='CR-Div'>

                        <p className='CR-Text'>Copyright #EAGLEEYES <i class="fa fa-copyright" aria-hidden="true"></i> 2015. All right reserved</p>

                    </div>

                </Fade>

            </div>

        </div>
    )
}

export default Footer;