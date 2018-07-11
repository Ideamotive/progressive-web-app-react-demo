import React from 'react';
import styled from 'styled-components';

export default styled.div`
   position: absolute;
    width: 100%;
    height: 100px;
    left: 0;
    bottom: 70px;
    z-index: 3;
    text-align: center;
    background-color: ${props => props.backgroundColor };
  `;
