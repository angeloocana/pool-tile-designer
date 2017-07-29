import React from 'react';
import PropTypes from 'proptypes';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  background-color: blue;
  padding: 0.05rem;
`;

const Input = styled.input`
  appearance: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
`;

class Tile extends React.Component {
  static propTypes = {
    paintTile: PropTypes.func,
    selectedColor: PropTypes.string,
    tile: PropTypes.object
  }

  onClick = (event) => {
    this.props.paintTile(this.props.selectedColor, this.props.tile);
  }

  render() {
    const { tile } = this.props;

    return (
      <Wrapper>
        <Input
          type="checkbox"
          onClick={this.onClick}
          style={{
            backgroundColor: tile.color.id
          }}
        />
      </Wrapper>
    );
  }
};

export default Tile;
