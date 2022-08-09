import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ dogs }) {
  const links = dogs.map((dog) => {
    return (
      <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
        {dog.name}
      </NavLink>
    );
  });

  return (
    <>
      <nav className="NavBar">
        <NavLink exact to="/dogs">
          Home
        </NavLink>
        {links}
      </nav>
    </>
  );
}

export default Nav;
