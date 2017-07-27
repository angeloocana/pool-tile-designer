import { defaultTiles, resizeTiles } from '../domain/Tiles';
import { actions } from './actions';

const tiles = (state, action) => {
  switch (action.type) {
    case actions.RESIZE_TILES:
      return resizeTiles(action.size, state);
    default:
      return state || defaultTiles;
  }
};

export default tiles;
