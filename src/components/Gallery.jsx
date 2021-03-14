import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Gallery = ({ arrAttractions }) => (
  <Swiper slidesPerView={1}>
    {arrAttractions.map((el, index) => <SwiperSlide key={index}>
      {el.name}
    </SwiperSlide>)}
  </Swiper>
);

Gallery.propTypes = {
  arrAttractions: PropTypes.array.isRequired,
};

export default Gallery;
