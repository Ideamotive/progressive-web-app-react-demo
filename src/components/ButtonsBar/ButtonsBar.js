import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import Bar from './Bar';
import Wrapper from './Wrapper'

const ButtonsBar = (props) => {
  const {
    backgroundColor
  } = props
  return (
    <Bar backgroundColor={backgroundColor}>
      <Wrapper>
        {props.children}
      </Wrapper>
    </Bar>
  );
};

ButtonsBar.propTypes = {
  backgroundColor: PropTypes.string,
};

ButtonsBar.defaultProps = {
  backgroundColor: 'transparent'
};

export default ButtonsBar;


