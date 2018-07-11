import React from 'react';
import * as renderer from 'react-test-renderer';

import Image from '../Image';

describe('<Image/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <Image
          backgroundImage={'https://test.test'}/>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

