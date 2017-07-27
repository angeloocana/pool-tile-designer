const actions = {
  CHANGE_LANG: 'CHANGE_LANG'
};

const changeLang = (langKey) => {
  return {
    type: actions.CHANGE_LANG,
    langKey
  };
}

export {
  actions,
  changeLang
}
