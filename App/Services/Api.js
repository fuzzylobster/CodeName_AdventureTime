import apisauce from "apisauce";
const create = (baseURL = "http://e502038f.ngrok.io") => {
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  const postUserData = user => api.post("/users", user);
  return {
    postUserData
  };
};

export default {
  create
};
