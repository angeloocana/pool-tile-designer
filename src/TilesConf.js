import React from 'react';
import Tiles from './Tiles';
import { createTiles, resizeTiles } from './domain/Tiles';
import { FormattedMessage } from 'react-intl';

class TilesConf extends React.Component {
  constructor(...args) {
    super(...args);

    const size = {
      nRows: 10,
      nCols: 20
    };

    this.state = {
      size,
      tiles: createTiles(size)
    }
  }

  changeCols = (event) => {
    const size = {
      nRows: this.state.size.nRows,
      nCols: event.target.value
    };
    this.setState({
      size,
      tiles: resizeTiles(size, this.state.tiles)
    });
  }

  changeRows = (event) => {
    const size = {
      nRows: event.target.value,
      nCols: this.state.size.nCols
    };
    this.setState({
      size,
      tiles: resizeTiles(size, this.state.tiles)
    });
  }

  render() {
    return (
      <section>
        <form>
          <fieldset>
            <legend><FormattedMessage id="tiles.conf.title" /></legend>
            <div>
              <label>
                <FormattedMessage id="tiles.conf.nrows" />
                <input type="text" value={this.state.size.nRows} onChange={this.changeRows} />
              </label>
              <label>
                <FormattedMessage id="tiles.conf.ncols" />
                <input type="text" value={this.state.size.nCols} onChange={this.changeCols} />
              </label>
            </div>
          </fieldset>
        </form>
        <Tiles tiles={this.state.tiles} a="b" />
      </section>
    );
  }
};

export default TilesConf;
