import React, { Component } from 'react';
import logo from '../assets/image/1.jpg';
import PropTypes from 'prop-types';
import Time from './tools/time';
import Weather from './tools/weather';
import AppMap from './tools/map';
import ExchangeRates from './tools/exchangeRates';
import Gallery from './Gallery';
import CountryDataService from '../services/country.service';
import PlaceDataService from '../services/place.service';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      placesLoaded: false,
      country: 
        {
          capitalLocation: {
            coordinates:
            [
              0, 0
            ]
          },
          id: 1,
          ISOCode: '',
          currency: 'RUB',
          localizations: [
            {
              name: 'blank',
              capital: 'blank',
              lang: '',
            },
            {
              name: 'blank',
              capital: 'blank',
              lang: '',
            },
            {
              name: 'blank',
              capital: 'blank',
              lang: '',
            },
          ]
        },
      legend: [
        {
          capital: 'Capital: ',
        },
        {
          capital: 'Столица: ',
        },
        {
          capital: 'Столица: ',
        },
      ],
      places: [
        {
          photoUrl: '',
          localizations: [
            {
              lang: '',
              description: '',
              name: 'blank'
            }
          ]
        }
      ]
    };
  }

  componentDidMount() {
    // console.log(this.state.country);
    this.getCountry();
    this.getPlaces()
    // console.log(999, this.state.country.currency);
  }

  getCountry() {
    CountryDataService.get(this.props.id)
      .then((response) => {
        this.setState({
          country: response.data,
          dataLoaded: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // retrievePlaces() {
  //   PlaceDataService.getAll()
  //     .then((response) => {
  //       this.setState({
  //         places: response.data,
  //         placesLoaded: true
  //       });
  //       // console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  getPlaces() {
    PlaceDataService.get(this.props.id)
      .then((response) => {
        this.setState({
          places: response.data,
          placesLoaded: true,
        });
        
        // console.log(this.state.country);
        // console.log(999, this.state.country.currency);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    const exchangeLoad = <ExchangeRates currency={this.state.country.currency}/>
    const mapLoad = <AppMap Country={this.state.country.ISOCode} Coordinates={this.state.country.capitalLocation.coordinates} lang={this.state.country.localizations[this.props.lang].lang}/>
    const timeLoad = <Time UTC={this.state.country.UTC}/>;
    const weatherLoad = <Weather lat={this.state.country.capitalLocation.coordinates[0]} lon={this.state.country.capitalLocation.coordinates[1]} lang={this.state.country.localizations[this.props.lang].lang}/>;
    const galleryLoad = <Gallery arrAttractions={this.state.places} lang={this.props.lang}/>;

    return (
     <section className="detail-page">
        <h1>Information about country</h1>
        <article className="info-country">
          <div className="img-wrap">
            <img src={this.state.country.imageUrl} alt={this.state.country._id} width="300" />
          </div>
          <div className="info-wrap">
            <h2>{this.state.country.localizations[this.props.lang].name}</h2>
            <h3>{this.state.legend[this.props.lang].capital}{this.state.country.localizations[this.props.lang].capital}</h3>
            <p>{this.state.country.localizations[this.props.lang].description}</p>
          </div>
        </article>
        <article className="country-common-info">
          <div>
            {this.state.dataLoaded ? timeLoad : ''}
            {this.state.dataLoaded ? exchangeLoad : ''}
          </div>
          <div>
            {this.state.dataLoaded ? weatherLoad : ''}
          </div>
          <div>
            {this.state.dataLoaded ? mapLoad : ''}
          </div>
        </article>
        <article>
          {this.state.placesLoaded ? galleryLoad : ''}
        </article>
        {/* {this.props.pr} */}
     </section>
    );
  }
}

// DetailPage.propTypes = {
//   pr: PropTypes.string.isRequired,
// };

export default DetailPage;
