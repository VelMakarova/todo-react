import React from "react";
import "./button.css";

export default function Button ({title, clickHandler, type, extraClass}) {
  return (
    <button className={`btn ${extraClass && extraClass}`} type={type} onClick={clickHandler}>{title}</button>
  )
}