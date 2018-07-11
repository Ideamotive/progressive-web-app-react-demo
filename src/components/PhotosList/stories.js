import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import PropTypes from 'prop-types';

import { withThemeDecorator } from '../storybook/withThemeDecorators';

import PhotosList from './PhotosList';

let photos = [];
for (let i = 0; i < 60; i++) {
  photos.push({
    description: 'Lorem ipsum',
    _id: String(i),
    photo: {
      secure_url: `https://placeimg.com/200/200/any?${Math.random()}`,
    },
    location: {
      latitude: (Math.random() * 0.09136) + 52.201028,
      longitude: (Math.random() * 0.219617) + 21.109468,
    },
  });
}

withThemeDecorator(storiesOf)('PhotosList', module)
  .addDecorator(withKnobs)
  .add('Photo List', () => {
    return (
      <PhotosList
        isVisible={boolean('Visible', true)}
        photos={photos}
      />
    );
  });