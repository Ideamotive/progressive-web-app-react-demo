import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { withThemeDecorator } from '../../components/storybook/withThemeDecorators';

import { List } from './List';

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

withThemeDecorator(storiesOf)('Cont. - List', module)
  .addDecorator(withKnobs)
  .add('List', () => {
    return (
      <List
        pushView={action('pushView')}
        photos={photos}
      />
    );
  });