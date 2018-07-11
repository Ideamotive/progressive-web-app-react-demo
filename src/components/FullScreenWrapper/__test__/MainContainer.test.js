import React from 'react';
import * as renderer from 'react-test-renderer';

import MainContainer from '../MainContainer';

describe('<MainContainer/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(
        <MainContainer>
          {'test'}
        </MainContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

