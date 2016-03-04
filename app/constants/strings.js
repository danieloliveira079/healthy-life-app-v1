const Strings = {};


Strings.default = {
  language: 'default',
};


Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  App: {
    Name: 'Healthy Life',
    FooterText: `©  ${new Date().getFullYear()}`,
    Exit: 'Sair',
  },

  Home: {
    Title: 'Home',
  },

  About: {
    Title: 'About',
  },

  Campaign: {
    Loading: 'Carregando campanhas...',
    Title: 'Campanhas',
    TitleList: 'Lista de Campanhas',
    FormTitle: 'Detalhes da Campanha',
    FormFields: {
      Status: {
        Active: 'Ativa',
        Inactive: 'Desativada',
      },
      Title: 'Título',
      Description: 'Descrição',
      Interval: {
        Label: 'Intervalo',
        Placeholder: 'Selecione um Intervalo',
      },
      Category: {
        Label: 'Categoria',
        Placeholder: 'Selecione uma Categoria',
      },
      Slides: 'Slides',
    },
  },

  Operations: {
    New: 'Nova',
    Edit: 'Alterar',
    Save: 'Salvar',
    Cancel: 'Cancelar',
    Delete: 'Excluir',
  },

  Login: {
    LoginAction: 'Entrar',
    LogoutAction: 'Sair',
    FormTitle: 'Informe suas Credenciais',
    SignUpText: 'Faça seu cadastro!',
    PasswordRecovery: 'Esqueceu sua senha?',
    LoginFailure: 'Não foi possível realizar o login. Verifique seu email e senha.',
  },

  Signup: {
    FormTitle: 'Informe as credenciais da nova conta',
    SignUpFailure: 'Não foi possível realizar o cadastro da conta!',
    SignUpAction: 'Salvar',
    CancelAction: 'Cancelar',
    FormFields: {
      Email: 'Email',
      Password: 'Senha',
      Password2: 'Confirme sua senha',
    },
  },

});

module.exports = Strings['pt-BR'];
