import ApiClient from './api-client';

const serviceUrl = 'campaigns';


export async function fetchCampaigns () {
  const options = {
    url: serviceUrl,
  };

  const { data } = await ApiClient.get(options);
  return data;
}

export async function detail (id) {
  const options = {
    url: `${serviceUrl}/${id}`,
  };

  const { data } = await ApiClient.get(options);
  return data;
}

export async function save (campaign) {
  const options = {
    url: serviceUrl,
    body: campaign,
  };

  const { data } = await ApiClient.post(options);
  return data;
}
