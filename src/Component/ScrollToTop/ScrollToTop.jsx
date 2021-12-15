import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import '../ScrollToTop/ScrollToTop.css';
import Fade from 'react-reveal/Fade';


const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth", });

    if (!visible) {
        return false;
    }

    return (


        <div>

            <Fade bottom>

                <div
                    className="scroll-to-top"
                    onClick={scrollToTop}
                >
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>

            </Fade>
        </div>
    );
};

export default ScrollToTop;