import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    appearance: none;
    background-color: blue;
    width: 10px;
    height: 10px;
    flex-grow: 1;
`;

const Tile = () => {
    return (
        <Input type="checkbox" />
    );
};

export default Tile;
