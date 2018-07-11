import React from 'react';
import * as renderer from 'react-test-renderer';

import BoxWrapper from '../BoxWrapper';

describe('<BoxWrapper/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <BoxWrapper>
          {'test'}
        </BoxWrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

