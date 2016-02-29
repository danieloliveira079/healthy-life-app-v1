import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/auth';

import { Strings } from '../constants';

const noavatarImage = require('../../images/containers/login/noavatar.png');

class Login extends Component {

  componentWillReceiveProps (nextProps) {
    const { auth, history } = nextProps;
    if (auth.isLoggedIn) {
      history.push('home');
    }
  }

  handleLogin () {
    const { dispatch, auth } = this.props;
    const { email, password } = this.refs;

    if (auth.isFetching) {
      return;
    }

    dispatch(login({
      email: email.value,
      password: password.value,
    }));
  }

  renderErrorMessage ({ loginError }) {
    if (!loginError) {
      return null;
    }

    return (
      <div className="row">
        <div className="col s12">
          <span className="red-text text-darken-2">Email ou senha inválidos!</span>
        </div>
      </div>
    );
  }

  render () {
    const { auth } = this.props;

    const style = {
      height: '100%',
      width: '100%',
    };

    const styleLogin = {
      maxWidth: '400px',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '20px',
      marginBottom: '50px',
    };

    const avatarStyle = {
      width: '120px',
      height: '120px',
      marginTop: '25px',
    };

    const headerStyle = {
      fontSize: '20px',
    };

    return (
      <div className="container grey lighten-4" style={style}>
        <div id="login-page" className="row" style={styleLogin}>
            <div className="col s12 z-depth-6 card-panel">
              <form className="login-form">
                <div className="row">
                  <div className="input-field col s12 center">
                    <h5 className="center login-form-text" style={headerStyle}>{Strings.Login.FormTitle}</h5>
                    <img src={noavatarImage} className="circle responsive-img" style={avatarStyle}/>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-social-person-outline prefix"></i>
                    <input ref="email" placeholder="" className="validate" id="email" type="email" defaultValue="admin@example.com" />
                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align active">Email</label>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-action-lock-outline prefix"></i>
                    <input ref="password" placeholder="" id="password" type="password" defaultValue="password" />
                    <label htmlFor="password" className="active">Senha</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12  login-text">
                      <input type="checkbox" id="remember-me" />
                      <label htmlFor="remember-me">Mantenha-me conectado</label>
                  </div>
                </div>
                {this.renderErrorMessage(auth)}
                <div className="row">
                  <div className="input-field col s12">
                    <a className="btn-large waves-effect waves-light blue col s12" onClick={::this.handleLogin}>
                      {Strings.Login.LoginAction}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 m6 l6">
                    <p className="margin medium-small"><a href="#">{Strings.Login.SignUpText}</a></p>
                  </div>
                  <div className="input-field col s6 m6 l6">
                      <p className="margin right-align medium-small"><a href="#">{Strings.Login.PasswordRecovery}</a></p>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </div>
    );
  }
}

export default connect((state) => {
  return {
    auth: state.auth,
  };
})(Login);
