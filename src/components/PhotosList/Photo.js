import React from 'react';
import styled from 'styled-components';

export default styled.div`
    position: relative;
    margin: 10px;
    border-radius: 75px;
    border: 2px ${ props => props.theme.colors.success } solid;
    width: 150px;
    height: 150px;
    background-size: cover;
    transition: transform .5s;
    will-change: transform;
    cursor: pointer;
    &:hover, &:active{
      transform: scale(1.1);
    }
  `;