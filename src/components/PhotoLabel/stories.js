import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs/react';

import { withThemeDecorator } from '../storybook/withThemeDecorators';

import PhotoLabel from './PhotoLabel'

withThemeDecorator(storiesOf)('PhotoLabel', module)
  .addDecorator(withKnobs)
  .add('Photo Label', () => {
    return (
      <PhotoLabel mainText={text('Main text', 'This is photo description')}/>
    );
  });