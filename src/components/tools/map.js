import React, { useState, useEffect } from 'react';
import { YMaps, Map, FullscreenControl, Placemark, ZoomControl } from 'react-yandex-maps';
import PropTypes from 'prop-types';
/* eslint-disable */
export default function AppMap(props) {
  const COLOR = '#49C0B5';
  const langList = ['en', 'ru', 'uk', 'tr'];
  const mapRef = React.createRef(null);
  const { lang: langProp, Coordinates, Country } = props;
  const [lang, setLang] = useState(langList.includes(langProp) ? `${langProp}_RU` : 'ru_RU');

  useEffect(() => {
    setLang(langList.includes(langProp) ? `${langProp}_RU` : 'ru_RU');
  }, [langProp]);

  const mapState = {
    center: Coordinates,
    zoom: 6,
    controls: []
  };

  const getRegions = (ymaps) => {
    if (mapRef && mapRef.current) {
      const objectManager = new ymaps.ObjectManager();
      ymaps.borders
        .load('001', {
          lang: 'ru',
          quality: 2
        })
        .then((result) => {
          const countrysAll = result.features;

          for (const value of countrysAll) {
            if (value.properties.iso3166 === Country) {
              value.id = value.properties.iso3166;
              value.options = {
                fillOpacity: 0.6,
                strokeColor: '#FFF',
                strokeOpacity: 0.5
              };
              value.options.fillColor = COLOR;
              objectManager.add(value);
              mapRef.current.geoObjects.add(objectManager);
              break;
            }
          }
        });
    }
  };

  return (
    <div className="map">
      <YMaps key={lang} query={{ lang }}>
        <Map
          width="100%"
          height="100%"
          instanceRef={mapRef}
          state={mapState}
          onLoad={(ymaps) => getRegions(ymaps)}
          modules={['borders', 'ObjectManager']}
        >
          <FullscreenControl />
          <ZoomControl />
          <Placemark defaultGeometry={Coordinates} />
        </Map>
      </YMaps>
    </div>
  );
}

AppMap.propTypes = {
  lang: PropTypes.string.isRequired,
  Coordinates: PropTypes.array.isRequired,
  Country: PropTypes.string.isRequired
};
