import store from '../store/redux';

export function setLocalStorageUserData(userKey, userEmail, userFio, hrUserKey) {
  localStorage.setItem('userKey', userKey);
  localStorage.setItem('userEmail', userEmail);
  localStorage.setItem('userFio', userFio);
  localStorage.setItem('hrUserKey', hrUserKey);
}

export function getLocalStorageUserData() {
  const userKey = localStorage.getItem('userKey');
  const userEmail = localStorage.getItem('userEmail');
  const userFio = localStorage.getItem('userFio');
  const hrUserKey = localStorage.getItem('hrUserKey');
  return { userEmail, userKey, userFio, hrUserKey };
}

export function clearUserData() {
  clearLocalStorageUserData();
  clearStoreUserData();
}

export function clearLocalStorageUserData() {
  localStorage.removeItem('userKey');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userFio');
  localStorage.removeItem('hrUserKey');
}

export function clearStoreUserData() {
  store.dispatch({ type: 'setUserKey', payload: '' });
  store.dispatch({ type: 'setuserEmail', payload: '' });
  store.dispatch({ type: 'setUserFio', payload: '' });
  store.dispatch({ type: 'setHrUserKey', payload: '' });
}

export function setStoreUserData(userKey, userEmail, userFio, hrUserKey) {
  store.dispatch({ type: 'setUserKey', payload: userKey });
  store.dispatch({ type: 'setuserEmail', payload: userEmail });
  store.dispatch({ type: 'setUserFio', payload: userFio });
  store.dispatch({ type: 'setHrUserKey', payload: hrUserKey })
}

export function getStoreUserData() {
  const user = store.getState().user;
  const userKey = user.userKey;
  const userEmail = user.userEmail;
  const userFio = user.userFio;
  const hrUserKey = user.hrUserKey; 
  return { userKey, userEmail, userFio, hrUserKey };
}

export function setUserData(userKey, userEmail, userFio, hrUserKey) {
  setLocalStorageUserData(userKey, userEmail, userFio, hrUserKey);
  setStoreUserData(userKey, userEmail, userFio, hrUserKey);
}

export function getUserData() {
  let data = getStoreUserData();
  if (!data.userKey || !data.userEmail || !data.hrUserKey ) {
    data = getLocalStorageUserData();
    // if (!data.userKey || !data.userEmail || !data.hrUserKey) {
    //   return null;
    // }
    setStoreUserData(data.userKey, data.userEmail, data.userFio, data.hrUserKey);
  }

  return data;
}
