import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import Pin from './Pin';

const PhotoPosition = (props) => {
  const { onPhotoClick, imgUrl, zoom, id } = props;
  const scale = ((zoom - 4) / 15);
  return (
    <Pin
      onClick = {() => {onPhotoClick(id)}}
      backgroundImage={ `url(${imgUrl})`}
      transform={ `translate(-30px, -30px) scale(${scale})`}
    />
  );
};

PhotoPosition.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  zoom: PropTypes.number.isRequired,
};

PhotoPosition.defaultProps = {
  onClick: () => null,
  zoom: 10,
};

export default PhotoPosition;