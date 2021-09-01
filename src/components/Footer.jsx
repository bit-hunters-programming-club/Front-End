import React from 'react'
import "./Styles/Footer.css"

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="footerBack">
                    <div className="allColocation">
                        <h1 className="contactTitle">Contact us</h1>
                        <div className="contactInfo">
                            <p>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                            </p>
                        </div>
                        <h1 className="infoTitle">Information</h1>
                        <div className="information">
                            <p>
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                            </p>
                        </div>
                        <h1 className="HelpTitle">Helpful Links</h1>
                        <div className="helpfulLinks">
                            <p>
                                ⚫ http://www.picturesofwalls.com <br />
                                ⚫ https://theoatmeal.com <br />
                                ⚫ http://www.peopleofwalmart.com
                            </p>
                        </div>
                        <h1 className="HelpTitle2">Helpful Links</h1>
                        <div className="helpfulLinks2">
                            <p>
                                ⚫ http://www.picturesofwalls.com <br />
                                ⚫ https://theoatmeal.com <br />
                                ⚫ http://www.peopleofwalmart.com
                            </p>
                        </div>
                        <div>
                            <img className="facebookLogo" src="https://www.dropbox.com/s/hgwi85ws2urr7pa/Facebook%20Logo.png?raw=1" alt="" />
                        </div>
                        <div>
                            <img className="facebookLogo2" src="https://www.dropbox.com/s/hgwi85ws2urr7pa/Facebook%20Logo.png?raw=1" alt="" />
                        </div>
                        <div>
                            <img className="googleLogo" src="https://www.dropbox.com/s/h1605uyx4xtqoxd/Google%20%2B%20Logo.png?raw=1" alt="" />
                        </div>
                        <div>
                            <img className="LinkedInLogo" src="https://www.dropbox.com/s/i3nvep45ep6xfhn/LinkedIn%20Logo.png?raw=1" alt="" />
                        </div>
                        <div className="line"></div>
                        <div>
                            <img className="bitHuntersLogo" src="https://www.dropbox.com/s/tykog9841iplr64/BitHunters%20Logo.png?raw=1" alt="" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;