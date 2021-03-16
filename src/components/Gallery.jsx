import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Gallery = (props) => <Swiper breakpoints={{
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 3,
  },
}}
                  spaceBetween={50}
                  navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
            {props.arrAttractions.map((el, index) => (
              <SwiperSlide key={index} className="slider-item">
                <div className="slider-img-wrap">
                <img src={el.photoUrl} alt={el.localizations[props.lang].name}></img>
                </div>
                <p key={index} className="slide-title">{el.localizations[props.lang].name}</p>
                <p>{el.localizations[props.lang].description}</p>
              </SwiperSlide>
            ))
            }
          </Swiper>;

Gallery.propTypes = {
  arrAttractions: PropTypes.array.isRequired,
  lang: PropTypes.number.isRequired,
};

export default Gallery;
