import React, { Component } from 'react';
import CardCountry from './CardCountry';

class CardsBoard extends Component {
  constructor(props) {
    super(props);
    this.countries = [
      {
        id: 1,
        name: 'country1',
        capital: 'capital1',
      },
      {
        id: 2,
        name: 'country2',
        capital: 'capital2',
      },
      {
        id: 3,
        name: 'country3',
        capital: 'capital3',
      },
      {
        id: 4,
        name: 'country1',
        capital: 'capital1',
      },
      {
        id: 5,
        name: 'country2',
        capital: 'capital2',
      },
      {
        id: 6,
        name: 'country3',
        capital: 'capital3',
      },
      {
        id: 7,
        name: 'country1',
        capital: 'capital1',
      },
      {
        id: 8,
        name: 'country2',
        capital: 'capital2',
      },
    ];
  }

  render() {
    return (
      <section className="cards-block">
        {this.countries.map((el) => (
          <CardCountry
            key={el.id}
            nameCountry={el.name}
            capitalCountry={el.capital}
          />
        ))}
      </section>
    );
  }
}

export default CardsBoard;
