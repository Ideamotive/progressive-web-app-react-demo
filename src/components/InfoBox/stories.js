import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text} from '@storybook/addon-knobs/react';

import { withThemeDecorator } from '../storybook/withThemeDecorators';

import InfoBox from './InfoBox';

withThemeDecorator(storiesOf)('InfoBox', module)
    .addDecorator(withKnobs)
    .add('Post Description', () => {
        return (
            <InfoBox
                created_at={new Date()}
                photoDesc={text('Image Description', 'Fake description')}
                imgUrl={text('Image url', 'https://placeimg.com/200/200/any')}
            />)
    });
