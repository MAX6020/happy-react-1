import "./Navbar.css";
import logo from "./../../img/Logo.svg"


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-nav">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <img src={logo}></img>
          </a>
          <ul className="nav-ul">
            <li className="nav-li">
              <a href="" className="nav-a">
                Home
              </a>
            </li>
            <li className="nav-li">
              <a href="" className="nav-a">
                Service
              </a>
            </li>
            <li className="nav-li">
              <a href="" className="nav-a">
                About us
              </a>
            </li>
            <li className="nav-li">
              <a href="" className="nav-a">
                Extra Salepages
              </a>
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
