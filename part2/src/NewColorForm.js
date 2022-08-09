import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NewColorForm({ addColor }) {
  const INITIAL_STATE = {
    color: "",
    hex: "",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [formData.color]: formData.hex });
    navigate("/colors");
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <h1>Color Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="text"
          name="color"
          placeholder="Enter Color"
          value={formData.color}
          onChange={handleChange}
          required
        />
        <label htmlFor="hex">Hex Value</label>
        <input
          id="hex"
          type="text"
          name="hex"
          placeholder="Enter Hex Value"
          value={formData.hex}
          onChange={handleChange}
          required
        />
        <button>Add Color!</button>
      </form>
    </div>
  );
}

export default NewColorForm;
