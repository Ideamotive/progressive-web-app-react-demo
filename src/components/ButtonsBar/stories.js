import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { withThemeDecorator } from '../storybook/withThemeDecorators';

import ActionButton from '../ActionButton/ActionButton';
import ButtonsBar from './ButtonsBar';

withThemeDecorator(storiesOf)('ButtonsBar', module)
  .addDecorator(withKnobs)
  .add('Icons on bar', () => {
    return (
      <ButtonsBar
        backgroundColor={boolean('Background', true) ? '#123' : 'transparent'}
      >
        {
          boolean('Button cancel', true) && <ActionButton
            onClick={action('click')}
            onActionStart={action('action start')}
            onActionEnd={action('action end')}
            iconClass={'fa fa-times'}
            vibrate={true}
            danger
          />
        }
        {
          boolean('Button camera', true) && <ActionButton
            onClick={action('click')}
            onActionStart={action('action start')}
            onActionEnd={action('action end')}
            iconClass={'fa fa-camera'}
            vibrate={true}
            primary
          />
        }
        {
          boolean('Button microphone', true) && <ActionButton
            onClick={action('click')}
            onActionStart={action('action start')}
            onActionEnd={action('action end')}
            iconClass={'fa fa-microphone'}
            vibrate={true}
            secondary
          />
        }
        {
          boolean('Button check', true) && <ActionButton
            onClick={action('click')}
            onActionStart={action('action start')}
            onActionEnd={action('action end')}
            iconClass={'fa fa-check'}
            vibrate={true}
            success
          />
        }
      </ButtonsBar>
    );
  });
