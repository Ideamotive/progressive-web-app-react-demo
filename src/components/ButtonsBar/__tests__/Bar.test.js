import React from 'react';
import * as renderer from 'react-test-renderer';

import Bar from '../Bar';

describe('<Bar/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(<Bar
        backgroundColor={'#fff'}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

