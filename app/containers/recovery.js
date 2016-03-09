import React, { Component } from 'react';
import { connect } from 'react-redux';

import { recover as rec } from '../actions/recovery';

import { Strings } from '../constants';

class Recovery extends Component {
  constructor (props) {
    super(props);

    this.state = {
      errorMessage: '',
    };
  }

  componentWillReceiveProps (nextProps) {
    const { recovery, history } = nextProps;

    if (recovery.isFetching) {
      return;
    }

    if (!recovery.recoveryError) {
      history.push('login');
    }
  }

  setErrorMessage (message) {
    this.setState({
      errorMessage: message,
    });
  }

  validateCredentials () {
    const { email } = this.refs;

    return this.validateEmail(email.value);
  }

  validateEmail (email) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (email.length === 0) {
      this.setErrorMessage(Strings.Recover.Validations.Email.Required);
      return false;
    }

    if (!email.match(pattern)) {
      this.setErrorMessage(Strings.Recover.Validations.Email.Valid);
      return false;
    }

    this.setErrorMessage('');
    return true;
  }

  handleRecovery () {
    const { dispatch, recovery } = this.props;
    const { email } = this.refs;

    if (recovery.isFetching || this.validateCredentials() === false) {
      return;
    }

    dispatch(rec({
      email: email.value,
    }));
  }

  renderErrorMessage ({ recoveryError }) {
    if (!recoveryError) {
      return null;
    }

    return (
      <div className="row">
        <div className="col s12">
          <span className="red-text text-darken-2">{Strings.Recover.RecoveryFailure}</span>
        </div>
      </div>
    );
  }

  render () {
    const { recovery } = this.props;

    const style = {
      width: '100%',
    };

    const styleRecover = {
      maxWidth: '400px',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '20px',
      marginBottom: '50px',
    };

    const headerStyle = {
      fontSize: '20px',
    };

    return (
      <div className="container grey lighten-4" style={style}>
        <div id="login-page" className="row" style={styleRecover}>
            <div className="col s12 z-depth-6 card-panel">
              <form className="login-form">
                <div className="row">
                  <div className="input-field col s12 center">
                    <h5 className="center login-form-text" style={headerStyle}>{Strings.Recover.FormTitle}</h5>

                  </div>
                </div>
                <div className="row margin">
                  <div className="input-field col s12">
                    <i className="mdi-social-person-outline prefix"></i>
                    <input ref="email" placeholder="" className="validate" id="email" type="email" />
                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align active">{Strings.Recover.FormFields.Email}</label>
                  </div>
                </div>
                {this.renderErrorMessage(recovery)}
                <div className="row">
                  <div className="col s12">
                    <span className="red-text text-darken-2">{this.state.errorMessage}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <a className="btn-large waves-effect waves-light blue col s12" onClick={::this.handleRecovery}>
                      {Strings.Recover.RecoverAction}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <p className="margin medium-small"><a href="/#/login">{Strings.Recover.CancelAction}</a></p>
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
    recovery: state.recovery,
  };
})(Recovery);
