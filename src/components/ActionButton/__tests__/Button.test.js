import Button from '../Button';
import React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider, } from 'styled-components';
import theme from '../../../components/theme';

describe('<Button/> component', () => {
  test('should match to snapshot', () => {
    const tree = renderer
      .create(<Button/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should modification match to snapshot', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Button primary/>
            <Button secondary/>
            <Button warning/>
            <Button danger/>
            <Button success/>
            <Button info/>
          </React.Fragment>
        </ThemeProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test('should render ', () => {
  //   const iconClass = 'test';
  //   const wrapper = mount(<Button />);
  //   expect(wrapper.find(`i.${iconClass}`)).toHaveLength(1)
  // });

});

