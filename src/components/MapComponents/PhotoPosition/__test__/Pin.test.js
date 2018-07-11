import React from 'react';
import * as renderer from 'react-test-renderer';
import { withTheme } from '../../../../test-utilities/with-theme';
import Pin from '../Pin';

describe('<Pin/> component', () => {
  test('should match to snapshot', () => {
    const PinWithTheme = withTheme(Pin);
    const tree = renderer
      .create(<PinWithTheme
        imgUrl={'http://test.test'}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

