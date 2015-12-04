let Strings = {};


Strings['default'] = {
  language: 'default'
};


Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  App: {
    Name: "Healthy Life",
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
    Title: "Campanhas",
    FormTitle: "Campanha"
  },
  Operations:{
    New: "Nova",
    Edit: "Alterar",
    Save: "Salvar",
    Cancel: "Cancelar",
    Delete: "Excluir"
  }

});

module.exports = Strings['pt-BR'];
