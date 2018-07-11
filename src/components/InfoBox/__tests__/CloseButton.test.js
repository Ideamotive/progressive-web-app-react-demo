import React from 'react';
import * as renderer from 'react-test-renderer';

import CloseButton from '../CloseButton';

describe('<CloseButton/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <CloseButton>
          {'test'}
        </CloseButton>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

