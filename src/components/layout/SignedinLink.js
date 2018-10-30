import React from "react";
import { NavLink } from "react-router-dom";

const SignedinLinks = () => {
  return (
    /* ingreso  */
    <ul className="right">
      <li>
        <NavLink to="/create">Nuevo Proyecto</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/">Salir</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/" className="btn btn-floating teal lighten-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
};
export default SignedinLinks;
