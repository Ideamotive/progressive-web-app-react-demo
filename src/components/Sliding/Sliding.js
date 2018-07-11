import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

// Animations
import './animations.css';

// Styled Components
import Paper from './Paper';

const Sliding = (props) => {
  const { condition, children, direction } = props;
  return (
    <CSSTransition
      in={condition}
      timeout={500}
      classNames={`sliding-${direction}`}
      unmountOnExit
    >
      {state => (
        <Paper>
          {children(state)}
        </Paper>
      )}
    </CSSTransition>
  );
};

Sliding.propTypes = {
  condition: PropTypes.bool,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  children: PropTypes.func,
};

Sliding.defaultProps = {
  direction: 'right',
};

export default Sliding;


