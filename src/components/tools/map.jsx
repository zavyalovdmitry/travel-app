import React from "react";
import { YMaps, Map,FullscreenControl,Placemark,ZoomControl } from "react-yandex-maps";




const COLORS = ["#F0F075", "#FB6C3F", "#3D4C76", "#49C0B5"];

export default function AppMap(props) {
  const mapRef = React.createRef(null); 
  const langGet=props.lang+"_RU";
  const mapState = {
    center: props.Coordinates,
    zoom: 4,
    controls: []
  };

  const getRegions = ymaps => {
    if (mapRef && mapRef.current) {
      var objectManager = new ymaps.ObjectManager();
      ymaps.borders
        .load("001", {
          lang: "ru",
          quality: 2
        })
        .then(result => {

          let countrysAll=result.features;
          let country='';
        
          for(let value of countrysAll){
            if(value.properties.iso3166==props.Country){
              value.id=value.properties.iso3166;
              value.options = {
                fillOpacity: 0.6,
                strokeColor: "#FFF",
                strokeOpacity: 0.5
              };
              value.options.fillColor = COLORS[3];
              objectManager.add(value);
              mapRef.current.geoObjects.add(objectManager);
             
              break;
            }       
          }});
    }
  };

  return (
    <div className="App">
      <YMaps query={{ lang: langGet }}>
        <Map
          // Создаем ссылку на инстанс мапа, чтобы использовать его
          instanceRef={mapRef}
          state={mapState}
          // Используем коллбэк функцию при загрузке карты
          onLoad={ymaps => getRegions(ymaps)}
          // Подключаем модули регионов и ObjectManager
          modules={["borders", "ObjectManager"]}>
               <FullscreenControl />
                <ZoomControl />
                <Placemark defaultGeometry={props.Coordinates} />
          </Map>
      </YMaps>
    </div>
  );
}
