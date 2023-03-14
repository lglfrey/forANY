import { loginAuth, logoutAuth } from '../api/api';
import { setUserData, clearUserData } from '../lib/handleAuthData';

export const login = async (userName, userPassword) => {
  let result;
  try {
    // result = await loginAuth(userName, userPassword);

    result = {
      data: {
        key: '345345',
        email: 'my@email.com',
        fio: 'Some Some',
      }
    }

    const { key, email, fio, hrKey } = result.data;
    setUserData(key, email, fio, hrKey);

    if (result.data.key && !result.data.hrKey) {
      document.location.href = '/some';
    }
    else {
      throw new Error('Could not retrieve user data from response');
    }
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  console.info('logout!');
  await logoutAuth();
  clearUserData();
  document.location.href = '/login';
};
