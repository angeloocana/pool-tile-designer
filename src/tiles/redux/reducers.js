import { defaultTiles, resizeTiles, paintTile } from '../domain/Tiles';
import { defaultColor, defaultColors } from '../domain/Colors';
import { actions } from './actions';

const tiles = (state, action) => {
  switch (action.type) {
    case actions.PAINT_TILE:
      return paintTile(action.color, action.tile, state);
    case actions.RESIZE_TILES:
      return resizeTiles(action.size, state);
    default:
      return state || defaultTiles;
  }
};

const colors = (state, action) => {
  switch (action.type) {
    default:
      return state || defaultColors;
  }
}

const selectedColor = (state, action) => {
  switch (action.type) {
    case actions.SELECT_COLOR:
      return action.color;
    default:
      return state || defaultColor;
  }
}

export {
  colors,
  selectedColor,
  tiles
};
