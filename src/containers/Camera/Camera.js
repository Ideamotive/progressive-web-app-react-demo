import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';

// Actions
import {
  capturePhoto,
} from '../../actions/camera';

import {
  pushView,
} from '../../actions/navigation';


// Components
import FullScreenWrapper from '../../components/FullScreenWrapper/FullScreenWrapper';
import ActionButton from '../../components/ActionButton/ActionButton';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';

export class Camera extends Component {

  capturePhoto = () => {
    this.props.capturePhoto(this.webcam.getScreenshot());
    this.props.pushView('DESCRIPTION');
  };

  renderWebcam = (width, height) => <Webcam
    audio={false}
    ref={node => this.webcam = node}
    screenshotFormat="image/png"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />;

  render() {
    return (
      <FullScreenWrapper
        render={this.renderWebcam}
      >
        <ButtonsBar>
          <ActionButton
            onClick={this.capturePhoto}
            iconClass={'fa fa-camera'}
            warning
            vibrate
          />
        </ButtonsBar>
      </FullScreenWrapper>
    );
  }
}

Camera.propTypes = {
  pushView: PropTypes.func.isRequired,
  capturePhoto: PropTypes.func.isRequired,
  camera: PropTypes.shape({
    photo: PropTypes.any.isRequired
  }).isRequired
};

function mapStateToProps(state = {}) {
  const { camera } = state;
  return {
    camera,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    capturePhoto: (...args) => dispatch(capturePhoto(...args)),
    pushView: (...args) => dispatch(pushView(...args)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Camera);