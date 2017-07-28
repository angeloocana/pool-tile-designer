const actions = {
  RESIZE_TILES: 'RESIZE_TILES',
  UPDATE_LANG: 'UPDATE_LANG',
  SELECT_COLOR: 'SELECT_COLOR',
  PAINT_TILE: 'PAINT_TILE'
};

/**
 * Create an action to resize tiles.
 * @param {*} size new size
 */
const resizeTiles = (size) => {
  return {
    type: actions.RESIZE_TILES,
    size
  }
}

const selectColor = (color) => {
  return {
    type: actions.SELECT_COLOR,
    color
  }
}

const paintTile = (color, tile) => {
  return {
    type: actions.PAINT_TILE,
    tile,
    color
  }
}

export {
  actions,
  paintTile,
  resizeTiles,
  selectColor
}
