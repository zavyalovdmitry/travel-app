import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Time from './tools/time';
import Weather from './tools/weather';
import AppMap from './tools/map';
import ExchangeRates from './tools/exchangeRates';
import Gallery from './Gallery';
import Video from './Video';
import CountryDataService from '../services/country.service';
import PlaceDataService from '../services/place.service';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      placesLoaded: false,
      country: {
        capitalLocation: {
          coordinates: [0, 0]
        },
        id: 1,
        ISOCode: '',
        currency: 'RUB',
        localizations: [
          {
            name: null,
            capital: null,
            lang: ''
          },
          {
            name: null,
            capital: null,
            lang: ''
          },
          {
            name: null,
            capital: null,
            lang: ''
          }
        ]
      },
      legend: [
        {
          capital: 'Capital: '
        },
        {
          capital: 'Столица: '
        },
        {
          capital: 'Столица: '
        }
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
    this.getCountry();
    this.getPlaces();
  }

  getCountry() {
    const { id } = this.props;

    CountryDataService.get(id)
      .then((response) => {
        this.setState({
          country: response.data,
          dataLoaded: true
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getPlaces() {
    const { id } = this.props;

    PlaceDataService.get(id)
      .then((response) => {
        this.setState({
          places: response.data,
          placesLoaded: true
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { country, places, legend, dataLoaded, placesLoaded } = this.state;
    const { lang } = this.props;

    const exchangeLoad = <ExchangeRates currency={country.currency} lang={lang} />;
    const mapLoad = (
      <AppMap
        Country={country.ISOCode}
        Coordinates={country.capitalLocation.coordinates}
        lang={country.localizations[lang].lang}
      />
    );
    const timeLoad = <Time UTC={country.UTC} lang={lang} />;
    const weatherLoad = (
      <Weather
        lat={country.capitalLocation.coordinates[0]}
        lon={country.capitalLocation.coordinates[1]}
        lang={country.localizations[lang].lang}
      />
    );
    const galleryLoad = (
      <>
        <Gallery arrAttractions={places} lang={lang} />
        <br />
        <p>
          {lang === 0
            ? '* Double click gallery to go fullscreen mode'
            : lang === 1
            ? '* Двойной клик по галерее для перехода в полноэкранный режим'
            : '* Двайны клік па галерэі для пераходу ў поўнаэкранны рэжым'}
        </p>
      </>
    );
    const videoLoad = <Video videoUrl={country.videoUrl} />;

    return (
      <section className="detail-page">
        <h1>Information about country</h1>

        <article className="info-country">
          <div className="info-wrap">
            <div className="img-wrap">
              {country.imageUrl ? (
                <img src={country.imageUrl} alt={country._id} width="300" />
              ) : (
                <Skeleton width={500} height={300} />
              )}
            </div>
            <div className="info">
              {country.localizations[lang].name ? (
                <>
                  <h2>{country.localizations[lang].name}</h2>
                  <h3>
                    {legend[lang].capital}
                    {country.localizations[lang].capital}
                  </h3>
                </>
              ) : (
                <Skeleton width={500} height={100} />
              )}
              {dataLoaded ? (
                <div className="vidgets">
                  {timeLoad}
                  {weatherLoad}
                  {exchangeLoad}
                </div>
              ) : (
                <Skeleton width={600} height={200} />
              )}
            </div>
          </div>
          <div className="about">
            {dataLoaded ? videoLoad : <Skeleton width={500} height={200} />}
            <p className="description">
              {country.localizations[lang].description || <Skeleton width={500} height={400} />}
            </p>
          </div>
        </article>

        <article className="country-common-info">{dataLoaded ? mapLoad : ''}</article>

        <article>{placesLoaded ? galleryLoad : ''}</article>
      </section>
    );
  }
}

DetailPage.propTypes = {
  lang: PropTypes.number.isRequired,
  // Coordinates: PropTypes.array,
  // Country: PropTypes.string,
  id: PropTypes.string
};

export default DetailPage;
