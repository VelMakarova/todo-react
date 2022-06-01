import React from "react";
import "./checkbox.css";

export default function Checkbox ({isChecked, checkHandler, title}) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={isChecked} name={title} onChange={() => checkHandler(title)}/>
      <i className="checkbox-tick" />
    </label>
  )
}