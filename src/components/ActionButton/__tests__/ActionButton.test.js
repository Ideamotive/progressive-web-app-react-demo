import ActiveButton from '../ActionButton';
import React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';

describe('<ActionButton/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(<ActiveButton/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render icon with class', () => {
    const iconClass = 'test';
    const wrapper = mount(<ActiveButton iconClass={iconClass}/>);
    expect(wrapper.find(`i.${iconClass}`)).toHaveLength(1);
  });

});

