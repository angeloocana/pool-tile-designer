import React from 'react';
import { connect } from 'react-redux';
import Tiles from '../components/Tiles';
import { cleanTiles, resizeTiles, selectColor, paintTile } from '../redux/actions';
import TilesConf from '../components/TilesConf';

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
    },
    cleanTiles: () => {
      dispatch(cleanTiles())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TilesManager);
