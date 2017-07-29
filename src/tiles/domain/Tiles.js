import R from 'ramda';
import { white } from './Colors';

/**
 * Try to get the color for position {x, y} in tiles
 * @param {*} tiles array of tiles to get the color from
 * @param {*} position {x, y}
 * @returns {String} color
 */
const getColor = (tiles, { x, y }) => {
  return (tiles && tiles.rows[x] && tiles.rows[x][y])
    ? tiles.rows[x][y].color
    : white;
};

/**
 * Return valid size if valid otherwise return undefined.
 * @param {*} size size of tiles nRows = x, nCols = y
 * @returns {Size} size or null
 */
const getValidSize = (size) => {
  return (size && size.nRows > 0 && size.nCols > 0)
    ? {
      nRows: Number(size.nRows),
      nCols: Number(size.nCols)
    }
    : null;
};

/**
 * Create tiles based on the size.
 * @param {*} tiles old tiles or just conf data
 * @returns {Tiles} new tiles
 */
const createTiles = (tiles) => {
  const size = getValidSize(tiles.size);

  if (!size) { return { ...tiles }; }

  const cols = R.range(0, size.nCols);

  const rows = R.range(0, size.nRows)
    .map(y => cols.map(x => {
      return { x, y, color: white };
    }));

  return {
    rows,
    size,
    bg: tiles.bg
  };
};

const defaultTilesSize = {
  nRows: 9,
  nCols: 33
};

const defaultBg = 'red';

const defaultTiles = createTiles({ size: defaultTilesSize, bg: defaultBg });

/**
 * Resize Tiles
 * @param {*} size size of tiles nRows = x, nCols = y
 * @param {*} tiles old tiles to resize
 * @returns {Tiles} new tiles resized
 */
const resizeTiles = (size, tiles) => {
  const newTiles = createTiles({ ...tiles, size });

  if (newTiles.rows === tiles.rows) { return newTiles; }

  const rows = newTiles.rows.map(row => row.map(({ x, y }) => {
    return {
      x,
      y,
      color: getColor(tiles, { x, y })
    };
  }));

  return {
    ...newTiles,
    rows
  };
};

const samePosition = (p1, p2) => {
  return p1.x === p2.x && p1.y === p2.y;
};

/**
 * Return new tiles with new color.
 * @param {*} color selected color
 * @param {*} tileToPaint tile to paint
 * @param {*} tiles array of tiles
 * @returns {Tiles} tiles paint with the new color
 */
const paintTile = (color, tileToPaint, tiles) => {
  const rows = tiles.rows.map(row => row.map(tile => {
    return samePosition(tileToPaint, tile)
      ? { ...tile, color }
      : tile;
  }));

  return { ...tiles, rows };
};

export {
  createTiles,
  defaultTiles,
  defaultTilesSize,
  getColor,
  resizeTiles,
  paintTile
};
