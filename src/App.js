import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import pictures from "./pictures.json";


let score = 0;
let topScore = 0;

class App extends React.Component {
  state = {

    pictures,
    score,
    topScore

  };






  //example function 
  funName = id => {

    const pictures = this.state.pictures;



    const clickedImg = pictures.filter(pictures => pictures.id === id);


    if (clickedImg[0].clicked) {

      score = 0;


      for (let i = 0; i < pictures.length; i++) {


        pictures[i].clicked = false;
      }

      this.setState({ score });
      this.setState({ pictures })


    }


    else if (score === 12 ){

pictures[0].clicked = true;
score++

if (score > topScore){


  topScore = score;
  this.setState({ topScore});
}

pictures.sort(function(a,b) {return .5 -Math.random()})

this.setState({pictures});
this.setState({score});

    } else{

      clickedImg[0].clicked =true;

score =0;

topScore =12;

this.setState({ topScore });
for (let i =0; i< pictures.length; i++){


pictures[i].clicked= false;

}

pictures.sort(function(a,b) {return .5 -Math.random()})

this.setState({ pictures });
this.setState({ score });


    }


  };



  render() {
    return (
      <div>
        <Navbar />
        <Header />
        {this.state.pictures.map(pic => (

        <Container
          funName={this.funName}
        id = {pictures.id}
        key = {pictures.id}
        image = {pictures.image}
        />
        ))}
      </div>);
  }
}
console.log("===========================" + pictures);

export default App;
