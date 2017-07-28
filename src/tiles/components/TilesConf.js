import React from 'react';
import { FormattedMessage } from 'react-intl';
import Colors from './Colors';
import Size from './Size';

const TilesConf = (props) => {
  return (
    <section>
      <header><FormattedMessage id="tiles.conf.title" /></header>
      <Size {...props} />
      <Colors {...props} />
    </section>
  );
};

export default TilesConf;
