import React from 'react';
import * as renderer from 'react-test-renderer';

import FullScreenWrapper from '../FullScreenWrapper';

describe('<FullScreenWrapper/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <FullScreenWrapper
          render={() => <div/>}
        >
          {'test'}
        </FullScreenWrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

