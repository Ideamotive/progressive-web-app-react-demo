import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { withThemeDecorator } from '../../components/storybook/withThemeDecorators';


import { Maps } from './Maps';

let photos = [];
for (let i = 0; i < 15; i++) {
  photos.push({
    description: 'Lorem ipsum',
    _id: String(i),
    photo: {
      secure_url: `https://placeimg.com/20/20/any?${Math.random()}`,
    },
    location: {
      latitude: (Math.random() * 0.09136) + 52.201028,
      longitude: (Math.random() * -0.219617) + 21.109468,
    },
  });
}

const withStore = (BaseComponent) => {
  class BaseComponentWithStore extends React.Component {
    constructor(){
      super();
      this.getApiKey();
    }
    state = {
      configs: null,
      maps: {
        viewport: {
          latitude: 52.274105,
          longitude: 20.97400,
          zoom: 14,
        },
        userPosition: null,
        isUserAttachedToViewport: false,
      },
    };
    getApiKey = async () => {
        const response = await fetch('/config/config.json');
        const configs = await response.json();
        this.setState({
          configs
        })
    };
    mapViewportChange = (viewport) => {
      this.setState((prevState, props) => ({
        maps: { ...prevState.maps, viewport },
      }));
    };
    navigateToLocation = ({ latitude, longitude }) => {
      this.setState((prevState) => ({
          maps: {
            ...prevState.maps,
            viewport: { ...prevState.maps.viewport, latitude, longitude },
          },
        }
      ));
    };
    setUserPosition = ({ latitude, longitude }) => {
      this.setState((prevState) => ({
          maps: {
            ...prevState.maps,
            userPosition: { latitude, longitude },
          },
        }
      ));
    };
    attachUserToMap = () => {
      this.setState((prevState) => ({
          maps: {
            ...prevState.maps,
            isUserAttachedToViewport: !prevState.maps.isUserAttachedToViewport,
          },
        }
      ));
    };

    render() {
      return this.state.configs ? <BaseComponent
        mapViewportChange={this.mapViewportChange}
        navigateToLocation={this.navigateToLocation}
        setUserPosition={this.setUserPosition}
        attachUserToMap={this.attachUserToMap}
        viewport={this.state.maps.viewport}
        userPosition={this.state.maps.userPosition}
        isUserAttachedToViewport={this.state.maps.isUserAttachedToViewport}
        configs={this.state.configs}
        {...this.props}
      /> : <pre>Run local server on localhost:8000. Config file should be hosted</pre>;
    }
  }
  return BaseComponentWithStore;
};

withThemeDecorator(storiesOf)('Cont. - Maps', module)
  .addDecorator(withKnobs)
  .add('Maps', () => {
    const MapsWithStore = withStore(Maps);
    return (
      <MapsWithStore
        pushView={action('pushView')}
        photos={ boolean('Show photos', true) ? photos : []}
        transitionState='entered'
      />
    );
  });