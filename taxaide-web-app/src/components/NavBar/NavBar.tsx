import { useState } from "react";
import navLogo from '../../assets/images/navLogo.png';
import './NavBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {

    const [defaultView, changeDefaultView] = useState(true);

    const navBarViewIndicatorChanger = () => {
        changeDefaultView(!defaultView)
    }

    return (

            <nav id="navBar">
                <div className = "textLogo">
                    <img className="logoTaxaide" src={navLogo} alt="Taxaide"/>
                    <NavLink onClick={navBarViewIndicatorChanger} className="firstViewLinkContainer" to="/">
                        For Individuals 
                        {defaultView ? <div className="individualViewUnderline"></div>  : null}
                    </NavLink>
                    <NavLink onClick={navBarViewIndicatorChanger} className="viewLinkContainer" to="/business">
                        For Businesses
                    </NavLink>
                    {defaultView ? <div></div> : <div className="businessesViewUnderline"></div>}
                </div>

                <div id = "navLinks">
                    <NavLink  to="/" className="rightviewLinkContainer" >
                        About Us
                    </NavLink>
                    <NavLink  to="/" className="rightviewLinkContainer" >
                        Contact
                    </NavLink>
                    <span className="rightviewLinkContainer">|</span>
                    <NavLink  to="/" className="rightviewLinkContainer">
                        Login
                    </NavLink>
                    <NavLink  to="/"  className="lastViewLinkContainer">
                        Create free account
                    </NavLink>
                </div>
            </nav>
        
    )

}

export default NavBar