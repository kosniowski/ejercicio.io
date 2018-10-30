import React from "react";
import { Link } from "react-router-dom";
import SignedinLinks from "./SignedinLink";
import SignedoutLinks from "./SignedoutLink";

const Navbar = () => {
  return (
    /* barra de navegacion y color */
    <nav className="nav-wrapper teal darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          {" "}
          Denuncia App{" "}
        </Link>

        <SignedinLinks />
        <SignedoutLinks />
      </div>
    </nav>
  );
};
export default Navbar;
