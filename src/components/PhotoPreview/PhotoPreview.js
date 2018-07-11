import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

// Animations
import './animations.css'

// Styled Components
import Photo from './Photo';

const PhotoPreview = (props) => {
  const { src, isVisible } = props;
  return (
    <CSSTransition
      in={isVisible}
      timeout={500}
      classNames='photo-preview'
      unmountOnExit
    >
      {state => (
        <Photo style={{ backgroundImage: `url(${src})` }}/>
      )}
    </CSSTransition>
  );
};

PhotoPreview.propTypes = {
  src: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

PhotoPreview.defaultProps = {
  isVisible: true,
};

export default PhotoPreview;


