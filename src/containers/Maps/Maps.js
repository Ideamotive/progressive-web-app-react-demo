import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';


// Actions
import {
  mapViewportChange,
  navigateToLocation,
  setUserPosition,
  attachUserToMap,
} from '../../actions/maps';

import {
  onBoxOpen,
} from "../../actions/ui";

import {
  pushView,
} from '../../actions/navigation';

// Components
import FullScreenWrapper from '../../components/FullScreenWrapper/FullScreenWrapper';
import ActionButton from '../../components/ActionButton/ActionButton';
import ButtonsBar from '../../components/ButtonsBar/ButtonsBar';
import UserPosition from '../../components/MapComponents/UserPosition/UserPosition';
import PhotoPosition from '../../components/MapComponents/PhotoPosition/PhotoPosition';

// Services
import { getCurrentLocation } from '../../services/location/location';
import {selectPhotoById} from "../../actions/photos";
import MainContainer from "../../components/FullScreenWrapper/MainContainer";
import withInfoBox from "../withInfoBox/withInfoBox";

export class Maps extends Component {
  constructor() {
    super();
    this.flyToInterpolator = new FlyToInterpolator();
    this.transitionDuration = 1;
    this.onPhotoSelect = this.onPhotoSelect.bind(this);
  }

  componentDidMount() {
    this.updateLocation();
  }

  updateLocation = () => {
    (async () => {
      try {
        const location = await getCurrentLocation();
        if (location) {
          this.props.navigateToLocation(location);
          this.props.setUserPosition(location);
        } else {
          this.props.attachUserToMap(true);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  };

  onCameraButtonClick = () => {
    this.props.pushView('CAMERA');
  };

  getRenderMapFunction = () => {
    if (this.props.transitionState === 'entered' || this.props.transitionState === 'exiting') {
      return this.renderMap;
    }
    return this.renderMapPlaceholder;
  };

  onPhotoSelect(id) {
    this.props.selectPhotoById(id);
    this.props.onBoxOpen();
  }

  renderMarkers = () => {
    return (
      <Fragment>
        {
          this.props.photos.map(photo => {
              return (
              <Marker
                key={photo.photo.secure_url}
                longitude={photo.location.longitude}
                latitude={photo.location.latitude}
              >
                <PhotoPosition
                  onPhotoClick = {this.onPhotoSelect}
                  id={photo._id}
                  zoom={this.props.viewport.zoom}
                  imgUrl={photo.photo.secure_url}
                />
              </Marker>
            );
          })
        }
        {
          this.props.userPosition &&
          <Marker
            longitude={this.props.userPosition.longitude}
            latitude={this.props.userPosition.latitude}
          >
            <UserPosition
              onClick={this.props.attachUserToMap}
              isActive={this.props.isUserAttachedToViewport}
            />
          </Marker>
        }
      </Fragment>);
  };

  renderMap = (width, height) => {
    return (
      <ReactMapGL
        {...this.props.viewport}
        width={width}
        height={height}
        onViewportChange={this.props.mapViewportChange}
        mapboxApiAccessToken={this.props.configs.MapboxAccessToken}
        transitionDuration={this.transitionDuration}
        transitionInterpolator={this.flyToInterpolator}
        dblclick={console.log}
      >
        {this.renderMarkers()}
      </ReactMapGL>);
  };

  renderMapPlaceholder = (width, height) => null;

  render() {
    const isCameraButtonVisible = !!this.props.userPosition && !this.props.isUserAttachedToViewport;
      return (
      <MainContainer>
          <FullScreenWrapper render={this.getRenderMapFunction()}>
              <ButtonsBar>
                  {
                      isCameraButtonVisible && <ActionButton
                          iconClass={'fa fa-camera'}
                          onClick={this.onCameraButtonClick}
                          danger
                      />
                  }
              </ButtonsBar>
          </FullScreenWrapper>
          {this.props.infoBox}
      </MainContainer>
    );
  }
}

Maps.propTypes = {
  viewport: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  userPosition: PropTypes.any,
  isUserAttachedToViewport: PropTypes.bool.isRequired,
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
  ).isRequired,
  mapViewportChange: PropTypes.func.isRequired,
  navigateToLocation: PropTypes.func.isRequired,
  setUserPosition: PropTypes.func.isRequired,
  attachUserToMap: PropTypes.func.isRequired,
  selectPhotoById: PropTypes.func.isRequired,
  pushView: PropTypes.func.isRequired,
  transitionState: PropTypes.string.isRequired,
  configs: PropTypes.object.isRequired,
};

function mapStateToProps(state = {}) {
  const { maps, photos, configs } = state;
  return {
    viewport: maps.viewport,
    userPosition: maps.userPosition,
    isUserAttachedToViewport: maps.isUserAttachedToViewport,
    photos: photos.list,
    configs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mapViewportChange: (...args) => dispatch(mapViewportChange(...args)),
    navigateToLocation: (...args) => dispatch(navigateToLocation(...args)),
    setUserPosition: (...args) => dispatch(setUserPosition(...args)),
    attachUserToMap: (...args) => dispatch(attachUserToMap(...args)),
    pushView: (...args) => dispatch(pushView(...args)),
    selectPhotoById: (...args) => dispatch(selectPhotoById(...args)),
    onBoxOpen: (... args) => dispatch(onBoxOpen(... args))
  };
}

export default withInfoBox(connect(mapStateToProps, mapDispatchToProps)(Maps));
