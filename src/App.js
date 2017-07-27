import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TilesManager from './tiles/containers/TilesManager';
import { FormattedMessage, IntlProvider } from 'react-intl';

const App = ({ i18n }) => {
  return (
    <IntlProvider
      locale={i18n.langKey}
      messages={i18n.messages}
    >
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><FormattedMessage id="app.title" /></h2>
        </div>
        <TilesManager />
      </div>
    </IntlProvider>
  );
}

const mapStateToProps = state => {
  return {
    i18n: state.i18n
  }
}

export default connect(mapStateToProps)(App);
