import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs/react';

import { withThemeDecorator } from '../storybook/withThemeDecorators';

import PhotoPosition from './PhotoPosition/PhotoPosition';
import UserPosition from './UserPosition/UserPosition';

withThemeDecorator(storiesOf)('Map elements', module)
  .addDecorator(withKnobs)
  .add('Photo map pin', () => {
    return (
      <PhotoPosition
        imgUrl={text('Image url', 'https://placeimg.com/60/60/any')}
        zoom={number('Zoom', 10, {
          range: true,
          min: 7,
          max: 25,
          step: 1,
        })}
      />
    );
  })
.add('User pin', () => {
    return (
      <UserPosition
        isActive={boolean('Active', false)}
      />
    );
  });
