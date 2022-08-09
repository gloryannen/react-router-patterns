import { Link } from "react-router-dom";

function Color({ color, hex }) {
  return (
    <div className="color" style={{ backgroundColor: hex }}>
      <h2>{color}</h2>
      <h4>
        <Link to="/colors">Go Back</Link>
      </h4>
    </div>
  );
}

export default Color;
