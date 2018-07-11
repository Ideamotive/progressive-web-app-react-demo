import React from 'react';
import * as renderer from 'react-test-renderer';

import ButtonBar from '../Bar';

describe('<ButtonBar/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(<ButtonBar
        backgroundColor={'#fff'}
      >
        <button>Click</button>
      </ButtonBar>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

