import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  appearance: none;
  width: 10px;
  height: 10px;
  flex-grow: 1;
`;

class Tile extends React.Component {
  onClick = (event) => {
    this.props.paintTile(this.props.selectedColor, this.props.tile);
  }

  render() {
    const { tile } = this.props;
    return (
      <Input
        type="checkbox"
        onClick={this.onClick}
        style={{
          backgroundColor: tile.color.id
        }}
      />
    );
  }
};

export default Tile;
