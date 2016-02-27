import axios from 'axios';
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

  async request (options) {
    try {
      options.url = (this.baseUrl || '') + (options.url || '');
      options.headers = options.headers || {};

      const accessToken = this.getAccessToken();
      const userEmail = this.getUserEmail();
      if (accessToken && userEmail) {
        options.headers['X-Auth-Token'] = accessToken;
        options.headers['X-User-Email'] = userEmail;
      }

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

  getUserEmail () {
    return localStorage.userEmail;
  }

  setAccessTokenAndUserEmail (data) {
    /* eslint camelcase:0 */
    const { auth_token, user_email } = data;

    localStorage.accessToken = auth_token;
    localStorage.userEmail = user_email;
  }
}

export default new ApiClient(config.apiService.url);
