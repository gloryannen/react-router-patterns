import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Color from "./Color";

function FilterColor({ colorChoices }) {
  const { color } = useParams();
  let hex = colorChoices[color];

  if (!hex) return <Navigate to="/colors" />;

  return (
    <div>
      <Color color={color} hex={hex} />
    </div>
  );
}

export default FilterColor;
