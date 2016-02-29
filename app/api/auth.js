import ApiClient from './api-client';

const serviceUrl = 'sessions';


export async function login (payload) {
  let body = {
    user: {
      ...payload,
    },
  };

  let options = {
    url: serviceUrl,
    data: body,
  };

  localStorage.clear();
  let { data } = await ApiClient.post(options);

  ApiClient.setAccessTokenAndUserEmail(data);

  return data;
}
