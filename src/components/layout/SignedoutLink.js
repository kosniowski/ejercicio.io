import React from "react";
import { NavLink } from "react-router-dom";

const SignedoutLinks = () => {
  return (
    /* ingreso */
    <ul className="right">
      <li>
        <NavLink to="/signup">Regístrate</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Iniciar sesión</NavLink>
      </li>
    </ul>
  );
};
export default SignedoutLinks;
