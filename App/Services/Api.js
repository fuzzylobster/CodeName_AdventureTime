import apisauce from "apisauce";
const create = (baseURL = "http://9f7eb631.ngrok.io") => {
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  const postUserData = user => api.post("/users", user);
  const findUserData = query => api.get(`/users?id=${query}`);
  return {
    postUserData,
    findUserData
  };
};


export default {
  create
};
