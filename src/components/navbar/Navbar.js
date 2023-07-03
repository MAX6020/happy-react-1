import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import logo from "./../../img/Logo.svg"


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-nav">
        <div className="nav-row">
          <NavLink to="/main">
            <img src={logo} className="logo"></img>
            </NavLink>
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink to="/main">
                Home
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink to="/service">
                Service
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink>
                About us
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink>
                Extra Salepages
              </NavLink>
            </li>
            <li className="nav-li">
              <button className="nav-btn">Get your free guide now</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
