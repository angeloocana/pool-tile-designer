import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TilesConf from './TilesConf';
import { addLocaleData, FormattedMessage, IntlProvider } from 'react-intl';
import enLocale from 'react-intl/locale-data/en';
import ptLocale from 'react-intl/locale-data/pt';
import enMessages from './i18n/en';
// import ptMessages from './i18n/pt';

addLocaleData([...enLocale, ...ptLocale]);

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      langKey: 'en',
      messages: enMessages
    };
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.langKey}
        messages={this.state.messages}
      >
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2><FormattedMessage id="app.title" /></h2>
          </div>
          <TilesConf />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
