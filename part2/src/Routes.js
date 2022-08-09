import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import ColorList from "./ColorList";
import FilterColor from "./FilterColor";
import NewColorForm from "./NewColorForm";

function Routing() {
  const initialColors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, setColor] = useState(initialColors);

  const handleAdd = (newColorObj) => {
    setColor((prevColors) => ({ ...prevColors, ...newColorObj }));
  };

  return (
    <Routes>
      <Route
        exact
        path="/colors"
        element={<ColorList colorChoice={colors} />}
      ></Route>
      <Route
        exact
        path="/colors/new"
        element={<NewColorForm addColor={handleAdd} />}
      ></Route>
      <Route
        path="/colors/:color"
        element={<FilterColor colorChoices={colors} />}
      ></Route>
      <Route path="/" element={<Navigate to="/colors" />} />
    </Routes>
  );
}

export default Routing;
