import React from 'react';
import * as renderer from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('<Wrapper/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <Wrapper>
          {'test'}
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMautchSnapshot();
  });
});

