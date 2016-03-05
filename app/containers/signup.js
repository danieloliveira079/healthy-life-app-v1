import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { signup as sig} from '../actions/signup';

import { Strings } from '../constants';

const noavatarImage = require('../../images/containers/login/noavatar.png');

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
    };
  }

  componentWillReceiveProps (nextProps) {
    const { signup, history } = nextProps;
    if (!signup.isSignedUp) {
      history.push('login');
    }
  }

  validatePasswordsMatch () {
      const { password, password2 } = this.refs;
      let errorMessage = '';

      if (password.value !== password2.value) {
        errorMessage = "Passwords don't match!";
        this.setState({
          errorMessage: errorMessage,
        });
        return false;
      } else {
        this.setState({
          errorMessage: errorMessage,
        });
        return true;
      }
  }

  handleSignUp () {
    const { dispatch, signup } = this.props;
    const { email, password } = this.refs;

    if (signup.isFetching || this.validatePasswordsMatch() == false) {
      return;
    }

    dispatch(sig({
      email: email.value,
      password: password.value,
    }));
  }

  renderErrorMessage ({ signupError }) {
    if (!signupError) {
      return null;
    }

    return (
      <div className="row">
        <div className="col s12">
          <span className="red-text text-darken-2">{Strings.Signup.SignUpFailure}</span>
        </div>
      </div>
    );
  }

  render () {
    const { signup } = this.props;

    const style = {
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
                    <h5 className="center login-form-text" style={headerStyle}>{Strings.Signup.FormTitle}</h5>
                    <img src={noavatarImage} className="circle responsive-img" style={avatarStyle}/>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-social-person-outline prefix"></i>
                    <input ref="email" placeholder="" className="validate" id="email" type="email" />
                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align active">{Strings.Signup.FormFields.Email}</label>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-action-lock-outline prefix"></i>
                    <input ref="password" placeholder="" onChange={::this.validatePasswordsMatch} id="password" type="password" />
                    <label htmlFor="password" className="active">{Strings.Signup.FormFields.Password}</label>
                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-action-lock-outline prefix"></i>
                    <input ref="password2" placeholder="" onChange={::this.validatePasswordsMatch} id="password2" type="password" />
                    <label htmlFor="password2" className="active">{Strings.Signup.FormFields.Password2}</label>
                  </div>
                </div>
                {this.renderErrorMessage(signup)}
                <div className="row">
                  <div className="col s12">
                    <span className="red-text text-darken-2">{this.state.errorMessage}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <a className="btn-large waves-effect waves-light blue col s12" onClick={::this.handleSignUp}>
                      {Strings.Signup.SignUpAction}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <p className="margin medium-small"><a href="/#/login">{Strings.Signup.CancelAction}</a></p>
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
    signup: state.signup,
  };
})(SignUp);
