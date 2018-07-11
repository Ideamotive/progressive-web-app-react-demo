import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import {
  addPhoto,
} from '../../actions/photos';

import {
  pushView,
} from '../../actions/navigation';

export default (BaseComponent) => {
  class componentWithAddNewPhoto extends Component {

    validateNewPhoto = () => {
      if (!this.props.location || !this.props.photo) {
        return false;
      }
      return true;
    };

    addNewPhoto = () => {
      if (!this.validateNewPhoto()) {
        alert('No location or photo');
        return;
      }
      const newPhoto = {
        location: this.props.location,
        photo: this.props.photo,
        description: this.props.description,
      };
      this.props.addPhoto(newPhoto);
      this.props.pushView('MAPS');
    };

    render() {
      return (
        <BaseComponent
          addNewPhoto={this.addNewPhoto}
          {...this.props}
        />
      );
    }
  }

  function mapStateToProps(state = {}) {
    return {
      location: state.maps.userPosition,
      photo: state.camera.photo,
      description: state.description.photoLabel,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      addPhoto: (...args) => dispatch(addPhoto(...args)),
      pushView: (...args) => dispatch(pushView(...args)),
    };
  }

  //TODO : prop types
  componentWithAddNewPhoto.propTypes = {
  };

  return connect(mapStateToProps, mapDispatchToProps)(componentWithAddNewPhoto);
}
