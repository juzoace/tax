import { useState } from "react";
import navLogo from '../../assets/images/navLogo.png';
import './NavBar.css';
import { NavLink } from "react-router-dom";

// const NavBar = () => {

    

//     return (

//             <nav id="navBar">
//                 <div className = "leftNavLinks">
//                     <img className="logoTaxaide" src={navLogo} alt="Taxaide"/>
//                     <NavLink onClick={navBarViewIndicatorChanger} className="firstViewLinkContainer" to="/">
//                         For Individuals 
//                         {defaultView ? <div className="individualViewUnderline"></div>  : null}
//                     </NavLink>
                    // <NavLink onClick={navBarViewIndicatorChanger} className="viewLinkContainer" to="/business">
                    //     For Businesses
                    // </NavLink>
//                     {defaultView ? <div></div> : <div className="businessesViewUnderline"></div>}
//                 </div>

                <div id = "rightNavLinks">
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


//                 <div >

//                 <button
//                     className="hamburger"
//                     onClick={() => {
//                     setIsNavExpanded(!isNavExpanded);
//                     }}
//                 >
//                     {/* icon from Heroicons.com */}
//                     <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="white"
//                     >
//                     <path
//                         fillRule="evenodd"
//                         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                         clipRule="evenodd"
//                     />
//                     </svg>
//                 </button>

//                 </div>
//             </nav>
        
//     )

// }

const NavBar = () => {

    const [defaultView, changeDefaultView] = useState(true);
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const navBarViewIndicatorChanger = () => {
        changeDefaultView(!defaultView)
    }

    return (

    //     <nav  className="navbar navbar-expand-lg navbar-light bg-dark">
    //         {/* <a className="navbar-brand" href="#">Navbar</a> */}
    //         <img className="logoTaxaide" src={navLogo} alt="Taxaide"/>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //             <NavLink onClick={navBarViewIndicatorChanger} className="firstViewLinkContainer" to="/">
    //                         For Individuals 
    //                         {defaultView ? <div className="individualViewUnderline"></div>  : null}
    //             </NavLink>
    //         </li>
    //         <li className="nav-item">
    //             <NavLink onClick={navBarViewIndicatorChanger} className="viewLinkContainer" to="/business">
    //                         For Businesses
    //                         {defaultView ? <div></div> : <div className="businessesViewUnderline"></div>}
    //             </NavLink>   
    //         </li>
    //         {/* <li className="nav-item">
    //           <a className="nav-link" href="#">Pricing</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" href="#">Disabled</a>
    //         </li> */}
    //       </ul>

    //         {/* <div id = "rightNavLinks">
    //                 <NavLink  to="/" className="rightviewLinkContainer" >
    //                     About Us
    //                 </NavLink>
    //                 <NavLink  to="/" className="rightviewLinkContainer" >
    //                     Contact
    //                 </NavLink>
    //                 <span className="rightviewLinkContainer">|</span>
    //                 <NavLink  to="/" className="rightviewLinkContainer">
    //                     Login
    //                 </NavLink>
    //                 <NavLink  to="/"  className="lastViewLinkContainer">
    //                     Create free account
    //                 </NavLink>
    //         </div> */}
    //         <ul className="nav navbar-nav navbar-right">
    //   <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
    //   <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    // </ul>

    //     </div>
    //   </nav>

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