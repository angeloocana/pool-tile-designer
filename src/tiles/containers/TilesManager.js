import React from 'react';
import { connect } from 'react-redux';
import Tiles from '../components/Tiles';
import { FormattedMessage } from 'react-intl';
import { resizeTiles } from '../redux/actions';

class TilesManager extends React.Component {
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
    const { tiles } = this.props;
    return (
      <section>
        <form>
          <fieldset>
            <legend><FormattedMessage id="tiles.conf.title" /></legend>
            <div>
              <label>
                <FormattedMessage id="tiles.conf.nrows" />
                <input type="text" value={tiles.size.nRows} onChange={this.changeRows} />
              </label>
              <label>
                <FormattedMessage id="tiles.conf.ncols" />
                <input type="text" value={tiles.size.nCols} onChange={this.changeCols} />
              </label>
            </div>
          </fieldset>
        </form>
        <Tiles tiles={tiles} />
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    tiles: state.tiles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSizeChange: size => {
      dispatch(resizeTiles(size))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TilesManager);
