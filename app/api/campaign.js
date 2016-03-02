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

export async function create (campaign) {
  const options = {
    url: serviceUrl,
    data: {
      campaign,
    },
  };

  const { data } = await ApiClient.post(options);
  return data;
}

export async function edit (campaign, id) {
  const options = {
    url: `${serviceUrl}/${id}`,
    data: {
      campaign,
    },
  };

  await ApiClient.put(options);
}

export async function deleteCampagin (id) {
  const options = {
    url: `${serviceUrl}/${id}`,
  };

  await ApiClient.delete(options);
}
