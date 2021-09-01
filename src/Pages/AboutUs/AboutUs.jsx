import React from 'react'
import { Link } from "react-router-dom"
import "./AboutUs.css"
import Footer from '../../components/Footer';

class Landing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <img className="landingBackground" src={"https://www.dropbox.com/s/p18juj2hhnddtmp/BitHunters-Background.png?raw=1"} alt="" />
                <div className="contentBackground">
                    <div class="textsLan">
                        <div className="imagesPosition">
                            <img className="imgLan" src={"https://www.dropbox.com/s/28zubpeo9e42jno/BitHunters.png?raw=1"} alt="" />
                        </div>
                        <Link to="/">
                            <button className="buttonLan">Read More</button>
                        </Link>
                        <div className="aboutUsAlignTexts">
                            <h1 className="aboutUsTitle">
                                About Us
                            </h1>
                            <h1 className="aboutUsText">
                                Lorem ipsum dolor sit amet, cons
                                ius natoque penatibus et magnis dis
                                parturient montes.
                            </h1>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Landing;