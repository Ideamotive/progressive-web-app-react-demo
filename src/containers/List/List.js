import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
// import {
//
// } from '../../actions/maps';

import {
  pushView,
} from '../../actions/navigation';

// Components
import FullScreenWrapper from '../../components/FullScreenWrapper/FullScreenWrapper';
import ActionButton from '../../components/ActionButton/ActionButton';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';
import PhotosList from '../../components/PhotosList/PhotosList';
import {onBoxOpen} from "../../actions/ui";
import InfoBox from "../../components/InfoBox/InfoBox";
import {selectPhotoById} from "../../actions/photos";

export class List extends Component {
    constructor(){
       super();
       this.onPhotoSelect = this.onPhotoSelect.bind(this);
    }
    onPhotoSelect(id) {
        this.props.selectPhotoById(id);
        this.props.onBoxOpen();
    }
  renderPhotos = () => {
    return <PhotosList onPhotoClick={this.onPhotoSelect} photos={this.props.photos}/>;
  };

  render() {
    return (
      <FullScreenWrapper render={this.renderPhotos}>
        <ButtonsBar>
          <ActionButton
            onClick={() => this.props.pushView('CAMERA')}
            iconClass={'fa fa-camera'}
            primary
          />
        </ButtonsBar>
        <InfoBox />
      </FullScreenWrapper>
    );
  }
}

List.propTypes = {
  pushView: PropTypes.func.isRequired,
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

function mapStateToProps(state = {}) {
  const { photos } = state;
  return {
    photos: photos.list,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushView: (...args) => dispatch(pushView(...args)),
    selectPhotoById: (...args) => dispatch(selectPhotoById(...args)),
    onBoxOpen: (... args) => dispatch(onBoxOpen(... args))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
