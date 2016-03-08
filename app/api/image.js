import axios from 'axios';

import config from '../env/config';

const ACCESS_TOKEN = config.dropBoxApi.token;

export async function uploadImage (image) {
  const path = `${config.dropBoxApi.uploadPath}${image.name}`;

  const { data: file } = await axios({
    method: 'post',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/octet-stream',
      'Dropbox-API-Arg': `{ "path": "${path}" }`,
    },
    url: config.dropBoxApi.uploadUrl,
    data: image,
  });

  const data = await getThumbnail(file.path_lower);

  return {
    ...file,
    image: data,
  };
}

export async function getThumbnail (path) {
  const { data } = await axios({
    method: 'post',
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      'Dropbox-API-Arg': `{ "path": "${path}" }`,
    },
    // url: 'https://content.dropboxapi.com/2/files/get_thumbnail',
    url: 'https://content.dropboxapi.com/2/files/download',
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
