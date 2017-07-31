import React from 'react';
import PropTypes from 'proptypes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { siteMetadata } from '../../gatsby-config';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../themes/theme';
import { connect, Provider } from 'react-redux';
import store from '../core/redux/store';
import { IntlProvider } from 'react-intl';

const Background = styled.div`
  background-color: ${props => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
`;

const BodyContainer = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.bg};
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin};
  max-width: ${props => props.theme.maxWidth};

  font-feature-settings: "calt" 1, "clig" 1, "dlig" 1, "kern" 1, "liga" 1, "salt" 1;
`;

let Wrapper = ({ i18n, children }) => {
  return (
    <IntlProvider
      locale={i18n.langKey}
      messages={i18n.messages}
    >
      <ThemeProvider theme={theme}>
        <Background>
          <BodyContainer>
            <Header siteMetadata={siteMetadata} />
            <main>
              {children()}
            </main>
            <Footer siteMetadata={siteMetadata} />
          </BodyContainer>
        </Background>
      </ThemeProvider>
    </IntlProvider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.func,
  i18n: PropTypes.object
};

const mapStateToProps = state => {
  return {
    i18n: state.i18n
  };
};

Wrapper = connect(mapStateToProps)(Wrapper);

const Layout = (props) => {
  return (
    <Provider store={store}>
      <Wrapper {...props} />
    </Provider>
  );
};

export default Layout;
