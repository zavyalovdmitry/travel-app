import React, { Component } from 'react';
import logo from 'assets/image/1.jpg';
import PropTypes from 'prop-types';
import Time from 'components/tools/time';
import Weather from 'components/tools/weather';
import AppMap from 'components/tools/map';
import ExchangeRates from 'components/tools/exchangeRates';
import Gallery from 'components/Gallery';

class DetailPage extends Component {
  render() {
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
    return (
     <section className="detail-page">
        <h1>Information about country</h1>
        <article className="info-country">
          <div className="img-wrap">
            <img src={logo} alt=""/>
          </div>
          <div className="info-wrap">
            <h2>Name</h2>
            <h3>Capital:Name</h3>
            <p>Desciption</p>
          </div>
        </article>
        <article>
         <Time UTC={2}/>
         <Weather city={833}/>
         <ExchangeRates currency={'RUB'}/>
        </article>
        <article>
          <Gallery arrAttractions={arrAttractions}/>
        </article>
        <article>
          <AppMap Country={'RU'} Coordinates={[53.19436343429614, 27.733527648710943]} lang={'en'}/>
        </article>
        {this.props.pr}
     </section>
    );
  }
}

DetailPage.propTypes = {
  pr: PropTypes.string.isRequired,
};

export default DetailPage;
