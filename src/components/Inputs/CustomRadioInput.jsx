import React from "react";

export default function CustomRadioInput({ id, handleRadio, disabled }) {
  return (
    <div className="custom-radio">
      <input
        type="radio"
        name="pledge"
        id={id}
        onChange={handleRadio}
        className="hidden"
        disabled={disabled}
      />
      <span className="checkmark"></span>
    </div>
  );
}
