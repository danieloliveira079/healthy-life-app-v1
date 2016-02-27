import ApiClient from './api-client';

const serviceUrl = 'api/auth';


export async function login (payload) {
  const body = Object
    .keys(payload)
    .map(prop => `${prop}=${payload[prop]}`)
    .join('&');

  const options = {
    url: serviceUrl,
    data: body,
  };

  localStorage.clear();
  const { data } = await ApiClient.post(options);

  const user = JSON.parse(data.user);
  localStorage.username = user.username;

  ApiClient.setAccessToken(data);

  return data;
}
