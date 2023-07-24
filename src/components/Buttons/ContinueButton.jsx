import React from "react";

export default function ContinueButton({ onClick }) {
  return (
    <button className="btn px-7 py-3 font-medium md:px-6" onClick={onClick} type="button">
      Continue
    </button>
  );
}
