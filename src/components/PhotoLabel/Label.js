import React from 'react';
import styled from 'styled-components';

export default styled.div`
    position: absolute;
    width: 80%;
    left: 10%;
    top: 20px;
    z-index: 3;
    text-align: center;
    background-color: ${props => props.backgroundColor };
  `;