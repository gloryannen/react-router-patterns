import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colorChoice }) {
  const colorLinks = Object.keys(colorChoice).map((colorName) => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <h1>
        <Link to="/colors/new">Add a color</Link>
      </h1>
      <div className="ColorList">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;
