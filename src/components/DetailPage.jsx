import React, { Component } from 'react';
import logo from 'assets/image/1.jpg';
import PropTypes from 'prop-types';
import Time from 'components/tools/time';
import Weather from 'components/tools/weather';
import AppMap from 'components/tools/map';
import ExchangeRates from 'components/tools/exchangeRates';
import Gallery from 'components/Gallery';
import CountryDataService from 'services/country.service';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
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
      ]
    };
  }

  componentDidMount() {
    // console.log(this.state.country);
    this.getCountry();

    // console.log(999, this.state.country.currency);
  }

  getCountry() {
    CountryDataService.get(this.props.id)
      .then((response) => {
        this.setState({
          country: response.data,
          dataLoaded: true,
        });
        
        // console.log(this.state.country);
        // console.log(999, this.state.country.currency);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    // console.log(this.props.id);
    const arrAttractions = [
      {
        photo: 'https://lh3.googleusercontent.com/proxy/54OpyWgRhH6udhorfHTgBYhr0PdTf54tc3mOKKJD6sg7FfyegKS7MKhXRDm-2miXBykY3t0JWpEmpCVKcaCveF4',
        description: 'sdfdsf',
        name: 'sdfsdf',
      },
      {
        photo: 'https://lh3.googleusercontent.com/proxy/54OpyWgRhH6udhorfHTgBYhr0PdTf54tc3mOKKJD6sg7FfyegKS7MKhXRDm-2miXBykY3t0JWpEmpCVKcaCveF4',
        description: 'sdfdsf',
        name: 'sdfsdf',
      },
      {
        photo: 'https://lh3.googleusercontent.com/proxy/54OpyWgRhH6udhorfHTgBYhr0PdTf54tc3mOKKJD6sg7FfyegKS7MKhXRDm-2miXBykY3t0JWpEmpCVKcaCveF4',
        description: 'sdfdsf',
        name: 'sdfsdf',
      },
      {
        photo: 'https://lh3.googleusercontent.com/proxy/54OpyWgRhH6udhorfHTgBYhr0PdTf54tc3mOKKJD6sg7FfyegKS7MKhXRDm-2miXBykY3t0JWpEmpCVKcaCveF4',
        description: 'sdfdsf',
        name: 'sdfsdf',
      },
      {
        photo: 'https://lh3.googleusercontent.com/proxy/54OpyWgRhH6udhorfHTgBYhr0PdTf54tc3mOKKJD6sg7FfyegKS7MKhXRDm-2miXBykY3t0JWpEmpCVKcaCveF4',
        description: 'sdfdsf',
        name: 'sdfsdf',
      },
      {
        photo: 'https://lh3.googleusercontent.com/proxy/54OpyWgRhH6udhorfHTgBYhr0PdTf54tc3mOKKJD6sg7FfyegKS7MKhXRDm-2miXBykY3t0JWpEmpCVKcaCveF4',
        description: 'sdfdsf',
        name: 'sdfsdf',
      },
    ];

    const exchangeLoad = <ExchangeRates currency={this.state.country.currency}/>
    const mapLoad = <AppMap Country={this.state.country.ISOCode} Coordinates={this.state.country.capitalLocation.coordinates} lang={this.state.country.localizations[this.props.lang].lang}/>
    const timeLoad = <Time UTC={2}/>;
    const weatherLoad = <Weather lat={this.state.country.capitalLocation.coordinates[0]} lon={this.state.country.capitalLocation.coordinates[1]} lang={this.state.country.localizations[this.props.lang].lang}/>;


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
          {/* <Gallery arrAttractions={arrAttractions}/> */}
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
