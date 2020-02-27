import React from "react"

import "../Header/header.css";

const Container = props => (

  <div onClick={() => props.funName(props.id)} className="card col-md-3">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Container;