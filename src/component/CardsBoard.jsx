import React, { Component } from "react";
import CardCountry from "./CardCountry";

class CardsBoard extends Component {
  constructor(props) {
    super(props);
    this.countries = [
      {
        name:"country1",
        capital:'capital1'
      },
      {
        name:"country2",
        capital:'capital2'
      },
      {
        name:"country3",
        capital:'capital3'
      },
      {
        name:"country1",
        capital:'capital1'
      },
      {
        name:"country2",
        capital:'capital2'
      },
      {
        name:"country3",
        capital:'capital3'
      },
      {
        name:"country1",
        capital:'capital1'
      },
      {
        name:"country2",
        capital:'capital2'
      },
    ];
  }

  render() {
    return  <section className="cards-block">
      {this.countries.map((el,index)=><CardCountry key={index} nameCountry={el.name} capitalCountry={el.capital}/>)}
    </section>;
  }
}

export default CardsBoard;