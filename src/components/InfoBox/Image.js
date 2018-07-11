import React from 'react';
import styled from 'styled-components';

export default styled.div`
    width: 100%;
    height: 300px;
    background-size: cover;
    background-image: ${props => props.backgroundImage};
    `;