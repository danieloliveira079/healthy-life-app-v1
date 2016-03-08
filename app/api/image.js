import axios from 'axios';

import config from '../env/config';

const ACCESS_TOKEN = '';

export async function uploadImage (image) {
  const path = `${config.dropBoxApi.uploadPath}${image.name}`;

  const { data } = await axios({
    method: 'post',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/octet-stream',
      'Dropbox-API-Arg': `{ "path": "${path}" }`,
    },
    url: config.dropBoxApi.uploadUrl,
    data: image,
  });

  return data;
}

export async function deleteImage (path) {
  const { data } = await axios({
    method: 'post',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    url: config.dropBoxApi.deleteUrl,
    data: {
      path,
    },
  });

  return data;
}
