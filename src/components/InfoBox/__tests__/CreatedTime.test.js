import React from 'react';
import * as renderer from 'react-test-renderer';

import CreatedTime from '../CreatedTime';

describe('<CreatedTime/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <CreatedTime>
          {'test'}
        </CreatedTime>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

