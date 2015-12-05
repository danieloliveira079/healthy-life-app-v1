import React from 'react';
import { Link } from 'react-router'
import { FluxMixins, RouterMixins } from '../mixins';
import { Strings } from '../constants';

export default React.createClass({
  mixins: [ FluxMixins, RouterMixins ],

  handleCancel(){
    this.transitionTo("/");
  },

  componentDidMount(){

  },

  render() {
    let style ={
      height: '100%',
      width: '100%'
    };

    let styleLogin = {
      maxWidth:'400px',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '50px',
      marginBottom: '50px'
    };

    return (
      <div className="container grey lighten-4" style={style}>
        <nav className="navbar-component blue">
          <div className="title center brand-logo">
            {Strings.App.Name}
          </div>
        </nav>
        <div id="login-page" className="row" style={styleLogin}>
            <div className="col s12 z-depth-6 card-panel">
              <form className="login-form">
                <div className="row">
                  <div className="input-field col s12 center">

                    <h5 className="center login-form-text">{Strings.Login.FormTitle}</h5>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-social-person-outline prefix"></i>
                    <input className="validate" id="email" type="email" />
                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align">Email</label>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-action-lock-outline prefix"></i>
                    <input id="password" type="password" />
                    <label htmlFor="password">Senha</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m12 l12  login-text">
                      <input type="checkbox" id="remember-me" />
                      <label htmlFor="remember-me">Mantenha-me conectado</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <Link to='/home' className="btn-large waves-effect waves-light blue col s12">{Strings.Login.LoginAction}</Link>
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

});
