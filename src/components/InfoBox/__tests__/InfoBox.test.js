import React from 'react';
import * as renderer from 'react-test-renderer';

import InfoBox from '../InfoBox';

describe('<InfoBox/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <InfoBox/>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

