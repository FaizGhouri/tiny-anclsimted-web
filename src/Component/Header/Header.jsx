import React from "react";
import '../Header/Header.css';
import { Button, Icon } from "semantic-ui-react";
import Bounce from 'react-reveal/Bounce';




const Header = () => {

    return (



        <div className="NavBar">

            <div className="Logo">

                <Bounce left cascade >

                    <span className="hash">#</span> EAGLEEYES

                </Bounce>

            </div>

            <div className="button">

                <Button animated>
                    <Button.Content visible >HOME</Button.Content>
                    <Button.Content hidden>
                        <Icon name='home' size="large" />
                    </Button.Content>
                </Button>
                <Button animated='vertical'>
                    <Button.Content visible>BLOG</Button.Content>
                    <Button.Content hidden>
                        <Icon name='blogger b' size="large" />
                    </Button.Content>
                </Button>
                <Button animated='vertical'>
                    <Button.Content visible>PAGE</Button.Content>
                    <Button.Content hidden>
                        <Icon name='page4' size="large" />
                    </Button.Content>
                </Button>
                <Button animated>
                    <Button.Content visible>ELEMENTS</Button.Content>
                    <Button.Content hidden>
                        <Icon name='elementor' size="large" />
                    </Button.Content>
                </Button>
                <Button animated='vertical'>
                    <Button.Content visible>CONTACT</Button.Content>
                    <Button.Content hidden>
                        <Icon name='id card' size="large" />
                    </Button.Content>
                </Button>



            </div>

            <div className="Icon-Btn-div">



                <button className="IconBtn-2" ><Icon name="mail" size="large" /></button>

                <div class="container-2">
                    <span class="icon"><i class="fa fa-search fa-lg"></i></span>
                    <input type="search" id="search" placeholder="Search..." />
                </div>

            </div>

        </div>

    )
}


export default Header;