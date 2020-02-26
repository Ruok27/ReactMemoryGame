import React from "react"

import "../Header/header.css";


class Container extends React.Component {


  render(props) {
    return (


      
      <div onClick={() => props.setClicked(props.id)} className="card col-md-3">
				<div className="img-container">
					<img alt={props.name} src={props.image} />
				</div>
			</div>

    );
  }
}

export default Container;
