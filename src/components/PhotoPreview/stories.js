import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text} from '@storybook/addon-knobs/react';

import { withThemeDecorator } from '../storybook/withThemeDecorators';

import PhotoPreview from './PhotoPreview';

withThemeDecorator(storiesOf)('PhotoLabel', module)
  .addDecorator(withKnobs)
  .add('Photo Preview', () => {
    return (
      <PhotoPreview
        isVisible={boolean('Visible', true)}
        src={text('Image url', 'https://placeimg.com/600/600/any')}
      />
    );
  });