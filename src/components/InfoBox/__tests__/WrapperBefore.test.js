import React from 'react';
import * as renderer from 'react-test-renderer';

import WrapperBefore from '../WrapperBefore';

describe('<WrapperBefore/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <WrapperBefore/>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

