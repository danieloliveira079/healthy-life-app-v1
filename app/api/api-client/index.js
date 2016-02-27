import axios from 'axios';
import moment from 'moment';
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnauthorizationError,
} from 'meaning-error';

import config from '../../env/config';

class ApiClient {
  constructor (baseUrl) {
    this.baseUrl = baseUrl;
  }

  get (options) {
    return this.request(options);
  }

  put (options) {
    options.method = 'PUT';
    return this.request(options);
  }

  post (options) {
    options.method = 'POST';
    return this.request(options);
  }

  delete (options) {
    options.method = 'DELETE';
    return this.request(options);
  }

  patch (options) {
    options.method = 'PATCH';
    return this.request(options);
  }

  log () {
    if (!arguments) {
      return;
    }
    if (!localStorage.log) {
      return;
    }

    /* eslint no-console:0 */
    console.log('LOGGER', arguments);
  }

  async request (options) {
    try {
      options.url = (this.baseUrl || '') + (options.url || '');
      options.headers = options.headers || {};

      this.log('checking refresh token..');
      await this.checkRefreshToken();
      this.log('refresh token has been checked');

      const accessToken = this.getAccessToken();
      if (accessToken) {
        options.headers.Authorization = `Bearer ${accessToken}`;
      }

      this.log('send request with options', options);
      return await axios({ ...options });
    } catch (err) {
      if (!err) {
        throw new UnauthorizationError('Unauthorization');
      }

      switch (err.status) {
        default:
        case 401:
          throw new UnauthorizationError('Unautorized');
        case 400:
          throw new BadRequestError(err.statusText);
        case 404:
          throw new NotFoundError(err.statusText);
        case 500:
        case 502:
        case 503:
          throw new InternalServerError(err.statusText);
      }
    }
  }

  getAccessToken () {
    return localStorage.accessToken;
  }

  setAccessToken (data) {
    /* eslint camelcase:0 */
    const { access_token, expires_in, refresh_token } = data;

    localStorage.accessToken = access_token;
    localStorage.refreshToken = refresh_token;
    localStorage.expiresAt = moment()
      .add(expires_in || 3599, 'seconds')
      .toJSON();
  }

  async checkRefreshToken () {
    if (!localStorage.refreshToken || !localStorage.expiresAt) {
      return Promise.resolve();
    }

    const expiresAt = moment(localStorage.expiresAt, 'YYYY-MM-DDTHH:mm:ssZ');
    const isExpired = expiresAt.subtract(5, 'minutes').isBefore(moment());

    if (!isExpired) {
      this.log('checkRefreshToken: token is not expired yet.');
      return Promise.resolve();
    }

    this.log('checkRefreshToken: refreshing token... ');
    localStorage.expiresAt = '';

    let payload = {
      grant_type: 'refresh_token',
      refresh_token: localStorage.refreshToken,
    };

    payload = Object
      .keys(payload)
      .map(prop => `${prop}=${payload[prop]}`)
      .join('&');

    const { data } = await axios({
      data: payload,
      headers: {},
      method: 'post',
      url: `${this.baseUrl}api/auth`,
    });

    this.log('checkRefreshToken: accessToken has just been renewed!', data);
    this.setAccessToken(data);

    return Promise.resolve();
  }
}

export default new ApiClient(config.apiService.url);
