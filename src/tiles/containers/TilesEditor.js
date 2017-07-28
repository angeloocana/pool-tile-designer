import React from 'react';
import { connect } from 'react-redux';
import Tiles from '../components/Tiles';
import { resizeTiles, selectColor, paintTile } from '../redux/actions';
import TilesConf from '../components/TilesConf';
import styled from 'styled-components';

class TilesManager extends React.Component {
  render() {
    return (
      <section>
        <TilesConf {...this.props} />
        <Tiles {...this.props} />
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    tiles: state.tiles,
    colors: state.colors,
    selectedColor: state.selectedColor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSizeChange: size => {
      dispatch(resizeTiles(size))
    },
    selectColor: color => {
      dispatch(selectColor(color))
    },
    paintTile: (color, tile) => {
      dispatch(paintTile(color, tile))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TilesManager);
