import React from 'react';
import styled from 'styled-components';

export default styled.div`
    &:before {
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 0 10px;
        border-color: #6980fe transparent transparent transparent;
        line-height: 0;
        _border-color: #6980fe #000000 #000000 #000000;
        _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
    }
`;