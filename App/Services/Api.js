<<<<<<< 5f5563a2095d92bfe26c0efde945116be682b4ce
import apisauce from "apisauce";
const create = (baseURL = "http://e502038f.ngrok.io") => {
=======
import apisauce from 'apisauce'
const create = (baseURL = 'http://192.168.1.209:3030') => {
>>>>>>> (merge)
  const api = apisauce.create({
    baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
<<<<<<< 5f5563a2095d92bfe26c0efde945116be682b4ce
  });

  const postUserData = user => api.post("/users", user);
=======
  })
  
  const postUserData = (user) => {
    // debugger;
    return api.post('/authentication', user);
  }
>>>>>>> (merge)
  return {
    postUserData
  };
};

export default {
  create
};
