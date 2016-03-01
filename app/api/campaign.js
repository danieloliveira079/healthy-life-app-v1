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

export async function create (campaign) {
  let options = {
    url: serviceUrl,
    data: {
      campaign,
    },
  };

  let { data } = await ApiClient.post(options);
  return data;
}

export async function edit (campaign, id) {
  let options = {
    url: `${serviceUrl}/${id}`,
    data: {
      campaign,
    },
  };

  await ApiClient.put(options)
}
