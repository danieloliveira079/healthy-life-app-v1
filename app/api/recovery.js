import ApiClient from './api-client';

const serviceUrl = 'recover';

export async function recover (payload) {
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

  return data;
}
