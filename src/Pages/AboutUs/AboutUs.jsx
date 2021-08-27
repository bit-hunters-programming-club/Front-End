import React from 'react'
import { Link } from "react-router-dom"
import "./AboutUs.css"

class Landing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="landingBackground" style={{ height: '100vh' }}>
                    <div className="contentBackground">
                        <div class="textsLan">
                            <div className="imagesPosition">
                                <img className="imgLan" src={"https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"} alt="" />
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
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;