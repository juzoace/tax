import TaxitPayFooterLogo from "../../assets/images/Taxit Pay Footer Logo.png"
import Instagram from "../../assets/images/Instagram.png";
import Facebook from "../../assets/images/Facebook.png";
import Twitter from "../../assets/images/Twitter.png";

import "./Footer.css";

const Footer = () => {
    return (
        <div className="footerComponentBorder">

            <div className="footerComponentContainer">
                <div className="footerLeftCard">
                    {/* Main side */}
                    {/* Main Logo */}
                    <div className="footerLogo">
                        <img alt="" src={TaxitPayFooterLogo} />
                    </div>
                    {/* Social Media Logo */}
                    <div className="footerSocialMediaLogos">
                        <span> <img src={Instagram} /> </span>
                        <span> <img src={Facebook} /> </span>
                        <span> <img src={Twitter} /> </span>
                    </div>

                    {/* Text */}
                    <div className="footerLogoText">
                        <p> 2015 - 2022 Taxaide Technologies Limited. All rights reserved. </p> 
                    </div>
                </div>

                <div className="footerRightCard">
                    

                    {/* Footer Link 1 */}
                    <div className="leftFooterLogoLinks">
                        <ul>
                            <li>About Us</li>
                            <li>About</li>
                            <li>Legal & Privacy</li>
                        </ul>
                    </div>
                    {/* Footer Link 2 */}
                    <div className="rightFooterLogoLinks">
                        <ul>
                            <li>Products</li>
                            <li>TBook</li>
                            <li>TaxiTWithhold</li>
                            <li>TaxiTPayroll</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;