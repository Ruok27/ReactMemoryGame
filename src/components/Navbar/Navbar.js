import React from "react";
import "../Navbar/navbar.css";

class Navbar extends React.Component {
  

  render() {
    return (
      <nav className="navbar">


<div className="navbar-nav">
  <ul>
                 <li id ="pageName"> <a className="nav-item" href = "/" > Picture Memory Game </a> </li> 
                 <li id ="prompt">  <a className="nav-item" > Click an Image to begin </a> </li> 
                 <li id ="score">  <a className="nav-item"  > Score: </a> </li> 
                 <li id ="topScore">   <a className="nav-item" > | Top Score: </a> </li> 

  </ul>
          
                </div>
            </nav>
    
    );
  }
}

export default Navbar;
