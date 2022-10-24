import { useState } from "react";
import navLogo from '../../assets/images/navLogo.png';
import './NavBar.css';
import { NavLink } from "react-router-dom";


const NavBar = () => {

    const [defaultView, changeDefaultView] = useState(true);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const navBarViewIndicatorChanger = () => {
        changeDefaultView(!defaultView)
    }

    return (

  

  <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
      <img className="logoTaxaide" src={navLogo} alt="Taxaide"/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span id="navbarIcon" className="navbar-toggler-icon"></span>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <a id="navText" className="nav-link" href="/">For Individual <span className="sr-only">(current)</span></a> */}

            <NavLink  id="navText" className="nav-link" to="/" >For Individual</NavLink>
          
          </li>
          <li className="nav-item">
            {/* <a id="navText" className="nav-link" href="/business">For Businesses</a> */}
            <NavLink  id="navText" className="nav-link" to="/business" >For Businesses</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a id="navText" className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a id="navText" className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a id="navText" className="nav-link hide" href="#">|</a>
          </li>
          <li className="nav-item">
            <a id="navText" className="nav-link" href="#">Login</a>
          </li>
        </ul>
          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
          <button id="navButton" className="btn btn-outline-success my-2 my-sm-0" type="submit">Create free account</button>
        </form>
      </div>
  </nav>


    )
}

export default NavBar