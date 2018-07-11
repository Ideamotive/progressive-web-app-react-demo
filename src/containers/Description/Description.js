import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import {
  setPhotoLabel,
} from '../../actions/description';

import {
  pushView,
} from '../../actions/navigation';

// Components
import FullScreenWrapper from '../../components/FullScreenWrapper/FullScreenWrapper';
import PhotoLabel from '../../components/PhotoLabel/PhotoLabel';
import PhotoPreview from '../../components/PhotoPreview/PhotoPreview';
import ActionButton from '../../components/ActionButton/ActionButton';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';

export class Description extends Component {
  constructor(props) {
    super(props);
    this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    this.recognition.lang = 'pl-PL';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 5;
    this.recognition.onresult = this.onRecognitionResult;
  }

  onRecognitionResult = (e) => {
    this.props.setPhotoLabelMainText(e.results[0][0].transcript);
  };

  componentDidMount() {
    if (!this.props.camera.photo) {
      this.props.pushView('CAMERA');
    }
  }

  renderPhotoPreview = (width, height) => <PhotoPreview
    width={width}
    height={height}
    src={this.props.camera.photo || ''}
    isVisible={this.props.transitionState === 'entered'}/>;

  recognitionStart = () => this.recognition.start();
  recognitionStop = () => this.recognition.stop();

  render() {
    return (
      <FullScreenWrapper render={this.renderPhotoPreview}>
        <PhotoLabel
          mainText={this.props.description.photoLabel.mainText}
        />
        <ButtonsBar>
          <ActionButton
            onActionStart={this.recognitionStart}
            onActionEnd={this.recognitionStop}
            iconClass={'fa fa-microphone'}
            danger
          />
          <ActionButton
            onClick={this.props.addNewPhoto}
            iconClass={'fa fa-plus'}
            success
          />

        </ButtonsBar>
      </FullScreenWrapper>
    );
  }
}

Description.propTypes = {
  pushView: PropTypes.func.isRequired,
  transitionState: PropTypes.string.isRequired,
  setPhotoLabelMainText: PropTypes.func.isRequired,
  addNewPhoto: PropTypes.func.isRequired,
  camera: PropTypes.shape({
    photo: PropTypes.string,
  }).isRequired,
  description: PropTypes.shape({
    photoLabel: PropTypes.shape({
      mainText: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

function mapStateToProps(state = {}) {
  const {
    camera,
    description,
  } = state;
  return {
    camera,
    description,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPhotoLabelMainText: (...args) => dispatch(setPhotoLabel.mainText(...args)),
    pushView: (...args) => dispatch(pushView(...args)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);
