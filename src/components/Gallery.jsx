import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Gallery = (props) => {
  // console.log(props.arrAttractions)
  return <Swiper  slidesPerView={3}
                  spaceBetween={50}
                  navigation={{ clickable: true }}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}>
            {props.arrAttractions.map((el, index) => (
              <SwiperSlide key={index}>
                <p key={index}>{el.localizations[props.lang].name}</p>
                <img src={el.photoUrl} alt={el.localizations[props.lang].name} width="350"></img>
                <p>{el.localizations[props.lang].description}</p>
              </SwiperSlide>
            ))
            }
          </Swiper>
}
// Gallery.propTypes = {
//   arrAttractions: PropTypes.array.isRequired,
// };

export default Gallery;
