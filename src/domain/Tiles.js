import R from 'ramda';

/**
 * Try to get the color for position {x, y} in tiles
 * @param {*} tiles 
 * @param {*} position {x, y}
 * @returns {String} color
 */
const getColor = (tiles, { x, y }) => {
  if (tiles && tiles[x] && tiles[x][y])
    return tiles[x][y].color;
};

/**
 * Create tiles based on the size.
 * @param {*} size
 */
const createTiles = (size) => {
  size = getValidSize(size);

  if (!size)
    return;

  console.log('size', size);
  const cols = R.range(0, size.nCols);

  return R.range(0, size.nRows)
    .map(y => cols.map(x => {
      return { x, y };
    }));
};

/**
 * Return valid size if valid otherwise return undefined.
 * @param {*} size
 */
const getValidSize = (size) => {
  if (size && size.nRows > 0 && size.nCols > 0)
    return {
      nRows: size.nRows * 1,
      nCols: size.nCols * 1
    };
};

/**
 * 
 * @param {*} size 
 * @param {*} tiles 
 */
const resizeTiles = (size, tiles) => {
  const newTiles = createTiles(size);

  if (!newTiles)
    return tiles;

  return newTiles.map(row => row.map(({ x, y }) => {
    return {
      x,
      y,
      color: getColor(tiles, { x, y })
    }
  }));
}

export {
  createTiles,
  getColor,
  resizeTiles
};
