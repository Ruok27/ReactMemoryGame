import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import pictures from "./pictures.JSON";


let score = 0;
let topScore = 0;

class App extends React.Component {
  state = {

    pictures,
    score,
    topScore

  };

shuffle = () =>{

  pictures.sort(function(a,b) {return .5 -Math.random()})


}




  //example function 
  funName = (id) => {

    const pictures = this.state.pictures;

    const clicked = pictures.filter(pictures => pictures.id === id);


    if (clicked[0].clicked) {

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

this.shuffle();

this.setState({pictures});
this.setState({score});

    } else{

clicked[0].clicked =true;

score =0;

topScore =12;

this.setState({ topScore });
for (let i =0; i< pictures.length; i++){


pictures[i].clicked= false;

}

this.shuffle();

this.setState({ pictures });
this.setState({ score });


    }


  };



  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Container  funName = {this.funName}
        id = {pictures.id}
        key = {pictures.id}
        image = {pictures.image}/>
      </div>);
  }
}

export default App;
