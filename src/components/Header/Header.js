import React from "react";
import "../Header/header.css";

class Header extends React.Component {
  

  render() {
    return (
<div class="header">

    <div id = "head">
        <h1>React Memory Game</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2>
</div>

</div>
    );
  }
}

export default Header;
