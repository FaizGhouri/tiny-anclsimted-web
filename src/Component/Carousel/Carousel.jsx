import React from "react";
import "./Carousel.css";
import { Carousel } from 'react-bootstrap';
import Man1 from '../../Image/img-01.jpg';
import Man2 from '../../Image/img002.jpg';
import Man3 from '../../Image/img003.jpg';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';




const Slide = () => {

    return (

        <div className="carousel">

            <Carousel nextIcon={false} prevIcon={false} >

                <Carousel.Item>

                    <div className="Carousel-Item-1">

                        <div>

                            <div className="Text-Div">

                                <Fade >

                                    <p className="Love">WE LOVE TO</p>

                                </Fade>

                                <Fade bottom>

                                    <p className="Unique-Text"><span className="hash-1">#</span>UNIQUE</p>
                                    <p className="Create-Text">CREATIVE PASSION</p>

                                </Fade>

                            </div>

                            <Fade bottom>

                                <div className="Soical-Icon-Div">



                                    <i class="fa fa-facebook fb-Icon" aria-hidden="true"></i>





                                    <i class="fa fa-twitter" aria-hidden="true"></i>




                                    <i class="fa fa-google-plus" aria-hidden="true"></i>





                                    <i class="fa fa-pinterest-p pinterest" aria-hidden="true"></i>


                                </div>

                            </Fade>

                        </div>

                        <Roll right>

                            <div className="Box-div"></div>

                        </Roll>


                        <Zoom bottom>

                            <img
                                className="d-block"
                                src={Man1}
                                alt="First slide"
                            />

                        </Zoom>

                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className="Carousel-Item-1">

                        <div>

                            <div className="Text-Div">

                                <Fade top>

                                    <p className="Love">WE LOVE TO</p>

                                </Fade>

                                <Fade bottom>

                                    <p className="Unique-Text"><span className="hash-1">#</span>UNIQUE</p>
                                    <p className="Create-Text">CREATIVE PASSION</p>

                                </Fade>

                            </div>

                            <Fade bottom>

                                <div className="Soical-Icon-Div">



                                    <i class="fa fa-facebook fb-Icon" aria-hidden="true"></i>





                                    <i class="fa fa-twitter" aria-hidden="true"></i>




                                    <i class="fa fa-google-plus" aria-hidden="true"></i>





                                    <i class="fa fa-pinterest-p pinterest" aria-hidden="true"></i>


                                </div>

                            </Fade>

                        </div>

                        <Roll right>

                            <div className="Box-div"></div>

                        </Roll>


                        <Zoom bottom>

                            <img
                                className="d-block"
                                src={Man2}
                                alt="First slide"
                            />

                        </Zoom>

                    </div>

                </Carousel.Item>
                <Carousel.Item>

                    <div className="Carousel-Item-1">

                        <div>

                            <div className="Text-Div">

                                <Fade>

                                    <p className="Love">WE LOVE TO</p>

                                </Fade>

                                <Fade bottom>

                                    <p className="Unique-Text"><span className="hash-1">#</span>UNIQUE</p>
                                    <p className="Create-Text">CREATIVE PASSION</p>

                                </Fade>

                            </div>

                            <Fade bottom>

                                <div className="Soical-Icon-Div">



                                    <i class="fa fa-facebook fb-Icon" aria-hidden="true"></i>





                                    <i class="fa fa-twitter" aria-hidden="true"></i>




                                    <i class="fa fa-google-plus" aria-hidden="true"></i>





                                    <i class="fa fa-pinterest-p pinterest" aria-hidden="true"></i>


                                </div>

                            </Fade>

                        </div>

                        <Roll right>

                            <div className="Box-div"></div>

                        </Roll>


                        <Zoom bottom>

                            <img
                                className="d-block"
                                src={Man3}
                                alt="First slide"
                            />

                        </Zoom>

                    </div>

                </Carousel.Item>

            </Carousel >

        </div >
    );
}

export default Slide;