import React from "react";
import "./input.css";

export default function Input ({value, changeValue}) {
  return (
    <input className="input" type="text" value={value} onChange={(e) => changeValue(e.target.value)} />
  )
}