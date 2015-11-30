let Strings = {};


Strings['default'] = {
  language: 'default'
};


Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  App: {
    Name: "Healty Life",
    FooterText: `©  ${new Date().getFullYear()}`,
    Exit: "Sair"
  },

  Home: {
    Title: "Home"
  },

  About: {
      Title: "About"
    },
  Campaign:{
    Title: "Campanhas"
  },
  Operations:{
    Edit: "Editar"
  }

});

module.exports = Strings['pt-BR'];
