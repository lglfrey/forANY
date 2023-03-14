import axios from 'axios';
import { getUserData } from '../lib/handleAuthData';

export const axiosInstance = async (data, app) => {
  try{
    const instance = axios.create();
    instance.interceptors.request.use(function (config) {
      const { userKey, userEmail, hrUserKey } = getUserData();
      config.headers.authorization = `token ${ app === undefined ? userKey : hrUserKey}`;
      config.headers.email = userEmail;
      return config;
    });  
    return instance({...data});
  }
  catch (error){ 
    return error;
  }
}
