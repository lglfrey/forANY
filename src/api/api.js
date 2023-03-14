import axios from 'axios';
import { reject } from 'lodash';
import { getUserData } from '../lib/handleAuthData';
const API_FULL_URL = `${process.env.REACT_APP_DJANGO_API}/api/v1`;
const API_HR_FULL_URL = `${process.env.REACT_APP_HR_DJANGO_API}`;

const greenButtonAuth = async (userName, userPassword) => {
  return await axios.post(`${API_FULL_URL}/auth/login/`, {
    username: userName,
    password: userPassword
  });
}

const hrAuth = async(userName, userPassword) => {
  return await axios.post(`${API_HR_FULL_URL}/api/auth/login/`, {
    username: userName,
    password: userPassword
  });  
}

export const loginAuth = async (userName, userPassword) => {
  const TrygreenButton =  async() => {
    return new Promise((resolve) => {
      greenButtonAuth(userName, userPassword)
      .then(data =>{
        console.log('data', data)
        resolve(data);   
      })
      .catch(err =>{
        resolve(err);
      })      
    });
  }

  const TryHr =  async() => {
    return new Promise((resolve, reject) => {
      hrAuth(userName, userPassword)
      .then(data =>{
        resolve(data);   
      })
      .catch(err =>{
        resolve(err);
      })      
    });
  }  

  let authData = {
    data: {
      key: '', 
      email: '', 
      fio: '', 
      hrKey: '',
    }
  }  
  const greeButtonData = await TrygreenButton();
  const hrData = await TryHr();
  
  return new Promise((resolve, reject) =>{
    if(hrData.status !== 200 && greeButtonData.status !== 200){
      reject(greeButtonData);
    }
    if(hrData?.data?.key){
      authData.data.hrKey = hrData.data.key;
      authData.data.email = hrData.data.email;
    }
    if(greeButtonData?.data?.key){
      authData.data = {
        ...authData.data,
        ...greeButtonData.data
      }   
    }
    resolve(authData)
  })
};

export const logoutAuth = async () => {
  const { userKey,  hrUserKey } = getUserData() || {};
  if(hrUserKey && userKey){  
    const greenButtonLogout = await axios.post(`${API_FULL_URL}/auth/logout/`);
    const hrLogout =  await axios.post(`${API_HR_FULL_URL}/api/auth/logout/`)
    return new Promise((resolve) => {
      if(hrLogout.status === 200 && greenButtonLogout.status === 200){
        resolve(true)        
      }
    });
  }
  if(hrUserKey && !userKey){
    return await axios.post(`${API_HR_FULL_URL}/api/auth/logout/`);
  }
  if(!hrUserKey && userKey){
    return await axios.post(`${API_FULL_URL}/auth/logout/`); 
  } 
};
