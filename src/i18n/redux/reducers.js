import { actions } from './actions';
import { addLocaleData } from 'react-intl';

const getI18n = (langKey) => {
  addLocaleData(require(`react-intl/locale-data/${langKey}`));

  return {
    langKey,
    messages: require(`../messages/${langKey}`)
  };
};

const i18n = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_LANG:
      return {
        langKey: action.langKey,
        messages: getI18n(action.langKey)
      }
    default:
      return state || getI18n('en');
  }
}

export {
  i18n
};
