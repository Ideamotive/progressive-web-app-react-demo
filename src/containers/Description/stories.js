import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { withThemeDecorator } from '../../components/storybook/withThemeDecorators';

import photo from './testPhoto'
import { Description } from './Description';

withThemeDecorator(storiesOf)('Cont. - Description', module)
  .addDecorator(withKnobs)
  .add('Description', () => {
    return (
      <Description
        pushView={action('pushView')}
        transitionState={'entered'}
        setPhotoLabelMainText={action('setPhotoLabelMainText')}
        camera={{ photo: photo }}
        description={{ photoLabel: { mainText: text('Description', 'This is sample photo description') } }}
        addNewPhoto={action('addPhoto')}
      />
    );
  });