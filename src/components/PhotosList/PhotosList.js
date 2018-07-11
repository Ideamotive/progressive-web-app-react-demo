import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

// Animations
import './animations.css';

// Styled Components
import Photo from './Photo';
import Grid from './Grid';

const PhotosList = (props) => {
  const { photos, isVisible, onPhotoClick} = props;
  return (
    <CSSTransition
      in={isVisible}
      timeout={500}
      classNames='photos-list'
      unmountOnExit
    >
      {state => (
        <Grid>
          {
            photos.map(photo => {
              return (
                <Photo
                  key={photo._id}
                  onClick = {() => {onPhotoClick(photo._id)}}
                  style={{ backgroundImage: `url(${photo.photo.secure_url})` }}
                />
              );
            })
          }
        </Grid>
      )}
    </CSSTransition>
  );
};

PhotosList.propTypes = {
  isVisible: PropTypes.bool,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.any,
      _id: PropTypes.string.isRequired,
      photo: PropTypes.shape({
        secure_url: PropTypes.string.isRequired,
      }),
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }),
    }),
  ),
};

PhotosList.defaultProps = {
  photos: [],
  isVisible: true
};

export default PhotosList;


