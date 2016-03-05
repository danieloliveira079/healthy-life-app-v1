export default {
  apiService: {
    url: process.env.API_SERVICE_URL,
  },
  dropBoxApi: {
    uploadPath: process.env.DROPBOX_UPLOAD_PATH,
    uploadUrl: process.env.DROPBOX_UPLOAD_URL,
    deleteUrl: process.env.DROPBOX_DELETE_URL,
  },
};
