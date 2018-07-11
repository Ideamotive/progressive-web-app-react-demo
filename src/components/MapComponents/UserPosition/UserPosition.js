import React from 'react';
import PropTypes from 'prop-types';

const ICON = `M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
			c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
			C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
			s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#2ecc71',
  stroke: 'none',
};

const UserPosition = (props) => {
  const { isActive, onClick } = props;
  const size = isActive ? 35 : 25;
  return (
    <svg height={size} viewBox='0 0 512 512'
         style={{ ...pinStyle, transform: `translate(${-size / 2}px,${-size}px)` }}
         onClick={onClick}>
      <path d={ICON}/>
    </svg>
  );
};

UserPosition.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

UserPosition.defaultProps = {
  onClick: () => null,
  isActive: false,
};

export default UserPosition;