import ApiClient from './api-client';

const serviceUrl = 'campaigns';


export async function fetchCampaigns () {
  let options = {
    url: serviceUrl,
  };

  let { data } = await ApiClient.get(options);
  return data;
}

export async function detail (id) {
  let options = {
    url: `${serviceUrl}/${id}`,
  };

  let { data } = await ApiClient.get(options);
  return data;
}

export async function save (campaign) {
  let options = {
    url: serviceUrl,
    body: campaign,
  };

  let { data } = await ApiClient.post(options);
  return data;
}
