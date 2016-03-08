export default {
  apiService: {
    url: process.env.API_SERVICE_URL,
  },
  dropBoxApi: {
    uploadUrl: process.env.DROPBOX_UPLOAD_URL,
    uploadPath: process.env.DROPBOX_UPLOAD_PATH,    
    deleteUrl: process.env.DROPBOX_DELETE_URL,
    token: process.env.DROPBOX_TOKEN,
  },
};
