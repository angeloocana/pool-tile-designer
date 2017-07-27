import R from 'ramda';

/**
 * Try to get the color for position {x, y} in tiles
 * @param {*} tiles 
 * @param {*} position {x, y}
 * @returns {String} color
 */
const getColor = (tiles, { x, y }) => {
  if (tiles && tiles.rows[x] && tiles.rows[x][y])
    return tiles.rows[x][y].color;
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
 * Create tiles based on the size.
 * @param {*} size
 */
const createTiles = (tiles) => {
  const size = getValidSize(tiles.size);

  if (!size)
    return { ...tiles};

  const cols = R.range(0, size.nCols);

  const rows = R.range(0, size.nRows)
    .map(y => cols.map(x => {
      return { x, y };
    }));

  return {
    rows,
    size,
    bg: tiles.bg
  }
};

const defaultTilesSize = {
  nRows: 10,
  nCols: 40
}

const defaultBg = 'red';

const defaultTiles = createTiles({ size: defaultTilesSize, bg: defaultBg });

/**
 * 
 * @param {*} size 
 * @param {*} tiles 
 */
const resizeTiles = (size, tiles) => {
  const newTiles = createTiles({ ...tiles, size });

  console.log('size', size);
  console.log('newTiles', JSON.stringify(newTiles));

  if (newTiles.rows === tiles.rows)
    return newTiles;

  const rows = newTiles.rows.map(row => row.map(({ x, y }) => {
    return {
      x,
      y,
      color: getColor(tiles, { x, y })
    }
  }));

  return {
    ...newTiles,
    rows
  };
}

export {
  createTiles,
  defaultTiles,
  defaultTilesSize,
  getColor,
  resizeTiles
};
