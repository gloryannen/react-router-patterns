import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";

function Routing({ dogs }) {
  return (
    <Routes>
      <Route exact path="/dogs" element={<DogList dogs={dogs} />}></Route>
      <Route
        path="/dogs/:name"
        element={<FilterDogDetails dogs={dogs} />}
      ></Route>
      <Route path="/" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default Routing;
