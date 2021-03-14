import React, { Component } from 'react';
import CardCountry from 'components/CardCountry';
import PropTypes from 'prop-types';
import CountryDataService from 'services/country.service';

class CardsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.retrieveCountries();
  }

  retrieveCountries() {
    CountryDataService.getAll()
      .then((response) => {
        this.setState({
          countries: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <section className="cards-block">
        { this.state.countries.map((el) => (el.name.includes(this.props.filterValue)
         || el.capital.includes(this.props.filterValue) ? <CardCountry
            key={el.id}
            nameCountry={el.name}
            capitalCountry={el.capital}
            changeLink={this.props.changeLink}
          /> : null))
      }
      </section>
    );
  }
}

CardsBoard.propTypes = {
  changeLink: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default CardsBoard;
