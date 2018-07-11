import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, selectV2 } from '@storybook/addon-knobs/react';
import { withThemeDecorator } from '../storybook/withThemeDecorators';

import Sliding from './Sliding';
import PhotoPreview from '../PhotoPreview/PhotoPreview';
import ButtonsBar from '../ButtonsBar/ButtonsBar';
import ActionButton from '../ActionButton/ActionButton';

const directions = {
  Right: 'right',
  Left: 'left',
  Top: 'top',
  Bottom: 'bottom',
};

withThemeDecorator(storiesOf)('Sliding', module)
  .addDecorator(withKnobs)
  .add('Simple Sliding', () => {
    return (
      <Sliding
        condition={boolean('Visible', true)}
        direction={ selectV2('Direction', directions, Object.values(directions)[0])}
      >
        {
          () => <h1>Simple Sliding</h1>
        }
      </Sliding>
    );
  })
  .add('with Photo', () => {
    return (
      <Sliding
        condition={boolean('Visible', true)}
        direction={ selectV2('Direction', directions, Object.values(directions)[0])}
      >
        {() => {
          return (
            <PhotoPreview
              src={text('Image url', 'https://placeimg.com/600/600/any')}
            />
          );
        }}
      </Sliding>
    );
  })
  .add('with ButtonsBar', () => {

    return (
      <Sliding
        condition={boolean('Visible', true)}
        direction={ selectV2('Direction', directions, Object.values(directions)[0])}
      >
        {() => {
          return (
            <ButtonsBar
              backgroundColor={boolean('Background', true) ? '#123' : 'transparent'}
            >
              <ActionButton
                iconClass={'fa fa-times'}
                danger
              />
              <ActionButton
                iconClass={'fa fa-camera'}
                primary
              />
              <ActionButton
                iconClass={'fa fa-microphone'}
                secondary
              />
              <ActionButton
                iconClass={'fa fa-check'}
                success
              />

            </ButtonsBar>
          );
        }}
      </Sliding>
    );
  });