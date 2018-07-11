import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { withThemeDecorator } from '../../components/storybook/withThemeDecorators';

import { Camera } from './Camera';

withThemeDecorator(storiesOf)('Cont. - Camera', module)
  .addDecorator(withKnobs)
  .add('Camera', () => {
    return (
      <Camera
        pushView={action('pushView')}
        capturePhoto={action('capturePhoto')}
        camera={{
          photo: ''
        }}
      />
    );
  });