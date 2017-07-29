import React from 'react';
import PropTypes from 'proptypes';
import { FormattedMessage } from 'react-intl';

class Size extends React.Component {
  static propTypes = {
    tiles: PropTypes.object,
    onSizeChange: PropTypes.func
  }

  changeCols = (event) => {
    const size = {
      nRows: this.props.tiles.size.nRows,
      nCols: event.target.value
    };
    this.props.onSizeChange(size);
  }

  changeRows = (event) => {
    const size = {
      nRows: event.target.value,
      nCols: this.props.tiles.size.nCols
    };
    this.props.onSizeChange(size);
  }

  render() {
    const { nCols, nRows } = this.props.tiles.size;
    return (
      <section>
        <header><FormattedMessage id="tiles.conf.size.title" /></header>
        <label>
          <FormattedMessage id="tiles.conf.size.nrows" />
          <input type="text" value={nRows} onChange={this.changeRows} />
        </label>
        <label>
          <FormattedMessage id="tiles.conf.size.ncols" />
          <input type="text" value={nCols} onChange={this.changeCols} />
        </label>
      </section>
    );
  }
};

export default Size;
