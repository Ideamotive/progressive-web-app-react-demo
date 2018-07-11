import React from 'react';
import * as renderer from 'react-test-renderer';
import { withTheme } from '../../../../test-utilities/with-theme';
import PhotoPosition from '../PhotoPosition';

describe('<PhotoPosition/> component', () => {
  test('should match to snapshot', () => {
    const PhotoPositionWithTheme = withTheme(PhotoPosition);
    const tree = renderer
      .create(<PhotoPositionWithTheme
        imgUrl={'http://test.test'}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

