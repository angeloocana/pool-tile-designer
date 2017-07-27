const actions = {
  RESIZE_TILES: 'RESIZE_TILES',
  UPDATE_LANG: 'UPDATE_LANG'
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
};

export {
  actions,
  resizeTiles
}