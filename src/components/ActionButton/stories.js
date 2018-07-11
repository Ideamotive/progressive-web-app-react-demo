import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { selectV2, withKnobs } from '@storybook/addon-knobs/react';

import { withThemeDecorator } from '../storybook/withThemeDecorators';
import { getBasicModifier } from '../storybook/knobs/modifier';

import ActionButton from './ActionButton';

withThemeDecorator(storiesOf)('ActionButton', module)
  .addDecorator(withKnobs)
  .add('Icons and modifiers', () => {
    const modifier = getBasicModifier();

    const iconOptions = {
      'Camera': 'fa fa-camera',
      'Check': 'fa fa-check',
      'Times': 'fa fa-times',
      'Microphone': 'fa fa-microphone',
    };
    const iconClass = selectV2('Icon', iconOptions, Object.values(iconOptions)[0]);

    return <ActionButton
      onClick={action('click')}
      onActionStart={action('action start')}
      onActionEnd={action('action end')}
      iconClass={iconClass}
      vibrate={true}
      {...modifier}
    />
  });