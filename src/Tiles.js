import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';

const Wrapper = styled.section`
    background-color: red;
`;

const Row = styled.div`
    display: flex;
`;

const getCheckboxKey = ({ x, y }) => `tile-${x}-${y}`;

const Tiles = () => {

    const tilesConf = {
        tiles: [
            [{ color: 'red', x: 0, y: 0 }, { color: 'white', x: 1, y: 0 }, { color: 'red', x: 2, y: 0 }, { color: 'black', x: 3, y: 0 }],
            [{ color: 'red', x: 0, y: 1 }, { color: 'white', x: 1, y: 1 }, { color: 'red', x: 2, y: 1 }, { color: 'black', x: 3, y: 1 }],
            [{ color: 'red', x: 0, y: 2 }, { color: 'white', x: 1, y: 2 }, { color: 'red', x: 2, y: 2 }, { color: 'black', x: 3, y: 2 }]
        ]
    };

    const tiles = tilesConf.tiles.map((row, i) =>
        <Row key={`tiles-row-${i}`}>
            {
                row.map(tile => <Tile key={getCheckboxKey(tile)} />)
            }
        </Row>
    );

    return (
        <Wrapper>
            {tiles}
        </Wrapper>
    );
};

export default Tiles;
