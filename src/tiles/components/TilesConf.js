import React from 'react';
import PropTypes from 'proptypes';
import { FormattedMessage } from 'react-intl';
import Colors from './Colors';
import Size from './Size';
import styled from 'styled-components';

const BtnCleanTiles = styled.button`

`;

class TilesConf extends React.Component {
  static propTypes = {
    cleanTiles: PropTypes.func
  }

  cleanTiles = (event) => {
    this.props.cleanTiles();
  }

  render() {
    return (
      <section>
        <header>
          <FormattedMessage id="tiles.conf.title" />
        </header>
        <Size {...this.props} />
        <Colors {...this.props} />
        <BtnCleanTiles onClick={this.cleanTiles}>
          <FormattedMessage id="tiles.conf.cleanTiles" />
        </BtnCleanTiles>
      </section>
    );
  }
}

export default TilesConf;
