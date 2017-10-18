import apisauce from "apisauce";
const create = (baseURL = "http://7bd6182c.ngrok.io") => {
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });
  const getSign = () => api.get("/auth/goggle");
  const postUserData = user => api.post("/users", user);
  return {
    postUserData,
    getSign
  };
};

export default {
  create
};
