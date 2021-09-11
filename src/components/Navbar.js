import { NavLink } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";

const Navbar = ({ logo }) => {
  // Link Style
  const linkStyle = {
    color: "#FFF",
    fontSize: "27px",
  };
  return (
    <nav className="bg-primary py-3 text-white d-flex justify-content-around align-items-center">
      <h1>
        <MdContactPhone /> {logo}
      </h1>
      <ul className="d-flex">
        <li className="me-3">
          <NavLink activeClassName="activeLink" style={linkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeLink" style={linkStyle} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  logo: "Contact Keeper",
};

export default Navbar;
