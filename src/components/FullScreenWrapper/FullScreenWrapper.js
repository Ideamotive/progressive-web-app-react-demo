import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import Wrapper from './Wrapper'


class FullScreenWrapper extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    const width = (this.fullScreenWrapper && this.fullScreenWrapper.offsetWidth) || 400;
    const height = (this.fullScreenWrapper && this.fullScreenWrapper.offsetHeight) || 400;
    return (
      <Wrapper innerRef={node => this.fullScreenWrapper = node}>
        {this.props.render(width, height)}
        {this.props.children}
      </Wrapper>
    );
  }
};

FullScreenWrapper.propTypes = {
  render: PropTypes.func.isRequired,
};

export default FullScreenWrapper;


