import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.button`
    width: ${props => (props.width || '100px')};
    height: ${props => (props.height || '100px')};
    background-color: ${props => (
      (props.primary && props.theme.colors.primary) ||
      (props.secondary && props.theme.colors.secondary) ||
      (props.warning && props.theme.colors.warning) ||
      (props.danger && props.theme.colors.danger) ||
      (props.success && props.theme.colors.success) ||
      (props.info && props.theme.colors.info) ||
      '#ccc'
    )};
    border-radius:  ${props => ((props.height / 2) || '50px')};
    border-style: solid;
    border-width: 2px;
    border-color: ${props => (
      (props.primary && lighten(.4, props.theme.colors.primary)) ||
      (props.secondary && lighten(.4, props.theme.colors.secondary)) ||
      (props.warning && lighten(.4, props.theme.colors.warning)) ||
      (props.danger && lighten(.4, props.theme.colors.danger)) ||
      (props.success && lighten(.4, props.theme.colors.success)) ||
      (props.info && lighten(.4, props.theme.colors.info)) ||
      '#ccc'
    )};
    text-align: center;
    cursor: pointer;
    transition: transform .5s;
    will-change: transform;
    &:active {
       transform: scale(1.05);
    }
    &:hover{
       transform: scale(1.025);
    }
    &:focus{
      outline: none;
    }
  `;