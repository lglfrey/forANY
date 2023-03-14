import axios from 'axios';


import { logout } from '../lib/auth';
import toast from 'react-hot-toast';
import { axiosInstance } from './axiosInstance';


const axiosAuth = async (data, app = undefined) => {  
  return axiosInstance(data, app)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      const unauthorizedStatus = 401;
      if (e.response.status === unauthorizedStatus) {
        toast.error('Вы не авторизованы в системе', {id: Math.random, position: 'top-right'});
        if (localStorage.getItem('disableAutoLogoutOn401') === 'true') {
          return;
        }

        setTimeout(() => {
          logout();
        }, 1200);
        return;
      }

      if(e.response.status === 403){
        toast.error('Чтение данной страницы ограничено', {id: Math.random, position: 'top-right'});
        setTimeout(() => {
          history.go(-1)
        }, 1200)
      }
      if (!e.response.data) {
        toast.error('Не удалось загрузить данные', {id: Math.random, position: 'top-right'});
      }
    });
};
export default axiosAuth;
