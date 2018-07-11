import React from 'react';
import styled from 'styled-components';

export default styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: 2px ${props => props.theme.colors.success} solid;
    background-size: cover;
    background-image: ${props => props.backgroundImage};
    transform: ${props => props.transform};
  `;