import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';
import Tile from './Tile';

const Wrapper = styled.section`
    background-color: red;
`;

const Row = styled.div`
    display: flex;
`;

const getCheckboxKey = ({ x, y }) => `tile-${x}-${y}`;

const Tiles = (props) => {
  return (
    <Wrapper>
      {props.tiles.rows.map((row, i) =>
        <Row key={`tiles-row-${i}`}>
          {
            row.map(tile => (
              <Tile
                key={getCheckboxKey(tile)}
                tile={tile}
                paintTile={props.paintTile}
                selectedColor={props.selectedColor}
              />))
          }
        </Row>
      )}
    </Wrapper>
  );
};

Tiles.propTypes = {
  tiles: PropTypes.object
};

export default Tiles;
