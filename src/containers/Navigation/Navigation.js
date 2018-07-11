import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Containers
import Maps from '../Maps/Maps';
import Description from '../Description/Description';
import Camera from '../Camera/Camera';
import List from '../List/List'

// Components
import Sliding from '../../components/Sliding/Sliding';

// HOC
import withAddNewPhoto from '../withAddNewPhoto/withAddNewPhoto'

// Actions
import { pushView } from '../../actions/navigation';

export class Navigation extends Component {

  componentDidMount() {
    window.onhashchange = this.navigateToHashLocation;
  }

  componentWillMount() {
    this.navigateToHashLocation();
  }

  navigateToHashLocation = () => {
    const hashLocation = window.location.hash.substring(1).toUpperCase();
    if (hashLocation === this.props.activeView) return;
    if (Object.keys(this.props.navigation).indexOf(hashLocation) !== -1) {
      this.props.pushView(hashLocation);
    } else {
      if(navigator.onLine) {
        this.props.pushView(Object.keys(this.props.navigation)[0]);
      } else {
        this.props.pushView(Object.keys(this.props.navigation).slice(-1)[0]);
      }
    }
  };

  render() {
    const { activeView } = this.props;
    return (
      <Fragment>
        {
          Object.keys(this.props.navigation).map(view => (
            <Sliding
              condition={activeView === view}
              key={view}
            >
              {(transitionState) => React.createElement(this.props.navigation[view], { transitionState })}
            </Sliding>
          ))
        }
      </Fragment>
    );
  }
}

Navigation.propTypes = {
  activeView: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  pushView: PropTypes.func.isRequired,
};

function mapStateToProps(state = {}) {
  const { activeView } = state;
  const navigation = {
    'MAPS': Maps,
    'CAMERA': Camera,
    'DESCRIPTION': withAddNewPhoto(Description),
    'LIST': List,
  };

  return {
    navigation,
    activeView,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushView: (...args) => dispatch(pushView(...args)),
  };
}

Navigation.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
