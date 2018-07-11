import React from 'react';
import * as renderer from 'react-test-renderer';

import Description from '../Description';

describe('<Description/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <Description>
          {'test'}
        </Description>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

