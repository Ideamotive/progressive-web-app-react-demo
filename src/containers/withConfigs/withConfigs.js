import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userToken from '../../services/userToken/token';

// Actions
import {
  setConfigs,
} from '../../actions/configs';

export default (BaseComponent) => {
  class componentWithConfigs extends Component {
    constructor() {
      super();
      this.fetchConfig();
      this.isTokenInitialized = false;
    }

    fetchConfig = async () => {
      const response = await fetch('/config/config.json');
      const json = await response.json();
      this.props.setConfigs(json);
    };

    componentWillReceiveProps(props) {
      if (props.configs && props.configs.databaseURL && !this.isTokenInitialized) {
        this.isTokenInitialized = true;
        userToken(props.configs);
      }
    }

    render() {
      return this.props.configs ? <BaseComponent {...this.props}/> : null;
    }
  }

  function mapStateToProps(state = {}) {
    return {
      configs: state.configs,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      setConfigs: (...args) => dispatch(setConfigs(...args)),
    };
  }

  componentWithConfigs.propTypes = {
    setConfigs: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(componentWithConfigs);
}