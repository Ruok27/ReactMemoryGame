import React from "react";
import "../Navbar/navbar.css";

class Navbar extends React.Component {
  

  render() {
    return (
      <nav class="navbar">


<div class="navbar-nav">
  <ul>
                 <li id ="pageName"> <a class="nav-item" href = "/" > Picture Memory Game </a> </li> 
                 <li id ="prompt">  <a class="nav-item" > Click an Image to begin </a> </li> 
                 <li id ="score">  <a class="nav-item"  > Score: </a> </li> 
                 <li id ="topScore">   <a class="nav-item" > | Top Score: </a> </li> 

  </ul>
          
                </div>
            </nav>
    
    );
  }
}

export default Navbar;
