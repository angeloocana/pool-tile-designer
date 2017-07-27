import {
  createTiles,
  getColor,
  resizeTiles
} from './Tiles';
import * as assert from 'ptz-assert';

describe('Tiles domain', () => {
  describe('createTiles', () => {
    it('3x3', () => {
      const size = { nRows: 3, nCols: 3 };
      const bg = 'white';
      const tiles = createTiles({ size, bg });

      const expectedTiles = {
        size,
        bg,
        rows: [
          [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
          [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
          [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
        ]
      };

      assert.deepEqual(tiles, expectedTiles);
    });

    it('invalid nRows', () => {
      const tiles = createTiles({ nCols: 1, nRows: '' });
      assert.notOk(tiles);
    });

    it('invalid nCols', () => {
      const tiles = createTiles({ nCols: '', nRows: 1 });
      assert.notOk(tiles);
    });

    it('invalid nRows and nCols', () => {
      const tiles = createTiles({ nCols: '', nRows: '' });
      assert.notOk(tiles);
    });
  });

  describe('getColor', () => {
    it('return color for real position', () => {
      const tiles = {
        rows: [
          [{ x: 0, y: 0, color: 'white' }]
        ]
      };

      const expectedColor = 'white';

      assert.equal(getColor(tiles, { x: 0, y: 0 }), expectedColor);
    });
    it('return undefined for invalid position', () => {
      const tiles = { rows: [] };

      assert.notOk(getColor(tiles, { x: 0, y: 0 }));
    });
  });

  describe('resizeTiles', () => {
    it('Keep color', () => {
      const oldTiles = {
        bg: 'red',
        size: { nRows: 1, nCols: 1 },
        rows: [[{ x: 0, y: 0, color: 'white' }]]
      };
      const newSize = { nRows: 2, nCols: 2 };
      const newTiles = resizeTiles(newSize, oldTiles);

      const expectedTiles = {
        size: newSize,
        bg: 'red',
        rows: [
          [{ x: 0, y: 0, color: 'white' }, { x: 1, y: 0, color: undefined }],
          [{ x: 0, y: 1, color: undefined }, { x: 1, y: 1, color: undefined }],
        ]
      };

      assert.deepEqual(newTiles, expectedTiles);
    });

    it('return oldTiles for invalid nRows', () => {
      const oldTiles = { rows: [[{ x: 0, y: 0, color: 'white' }]] };
      const newTiles = resizeTiles({ nRows: '', nCols: 2 }, oldTiles);

      assert.equal(newTiles, oldTiles);
    });

    it('return oldTiles for invalid nCols', () => {
      const oldTiles = { rows: [[{ x: 0, y: 0, color: 'white' }]] };
      const newTiles = resizeTiles({ nRows: 2, nCols: '' }, oldTiles);

      assert.equal(newTiles, oldTiles);
    });

    it('return oldTiles for invalid nRows and nCols', () => {
      const oldTiles = { rows: [[{ x: 0, y: 0, color: 'white' }]] };
      const newTiles = resizeTiles({ nRows: '', nCols: '' }, oldTiles);

      assert.equal(newTiles, oldTiles);
    });
  });
});
