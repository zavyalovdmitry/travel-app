import React from 'react';
import PropTypes from 'prop-types';

export default function Video(props) {
  const { videoUrl } = props;
  const videoSrc = `https://www.youtube.com/embed/${videoUrl.slice(videoUrl.lastIndexOf('/'))}`;

  return (
        <iframe width="560" height="315"
                src={videoSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

                </iframe>
  );
}

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};
