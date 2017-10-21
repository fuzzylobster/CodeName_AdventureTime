import apisauce from "apisauce";
const create = (baseURL = "http://270a5296.ngrok.io") => {
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  const apiAuth = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  const apiUpload = apisauce.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data"
    }
  });

  const postUserPhoto = imgBody => apiUpload.post("/image-upload", imgBody);
  const postUserData = user => api.post("/users", user);
  const findUserData = query =>
    api.get(`/users?googleId=${query}`).then(response => {
      console.log(response.data.data[0]);
    });
  return {
    postUserData,
    findUserData,
    postUserPhoto
  };
};

export default {
  create
};
