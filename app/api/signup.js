import ApiClient from './api-client';

const serviceUrl = 'signup';

export async function signup (payload) {
  const body = {
    user: {
      ...payload,
    },
  };

  const options = {
    url: serviceUrl,
    data: body,
  };

  localStorage.clear();
  const { data } = await ApiClient.post(options);

  // ApiClient.setAccessTokenAndUserEmail(data);

  return data;
}
