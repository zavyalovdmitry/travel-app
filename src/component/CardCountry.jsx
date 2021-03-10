import React, { Component } from "react";

class CardCountry extends Component {
  render() {
    return  <article className="card-country">
      <p>{this.props.nameCountry}</p>
      <p>{this.props.capitalCountry}</p>
    </article>;
  }
}

export default CardCountry;