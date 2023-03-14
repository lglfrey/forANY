import React, { useState, useEffect } from 'react';
import Loading from '../components/UI/Loading.jsx';
import { login } from '../lib/auth';
import InstallButton from '../components/InstallButton.jsx';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userNameError, setUserNameError] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [commonError, setCommonError] = useState('');

  const validateForm = () => {
    setCommonError('');
    setPasswordError('');
    setUserNameError('');
    let hasFormErrors = false;

    if (!userName) {
      hasFormErrors = true;
      setUserNameError('Необходимо заполнить поле');
    }

    if (!password) {
      hasFormErrors = true;
      setPasswordError('Необходимо заполнить поле');
    }

    return hasFormErrors;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const hasFormErrors = validateForm();

    if (!hasFormErrors) {
      setIsLoading(true);
      const loginError = await login(userName, password);
      setIsLoading(false);

      if (loginError) {
        console.info('loginError', loginError?.response);
        const data = loginError?.response?.data;
        if (data?.username) {
          setUserNameError(data.username[0]);
          return;
        }
        if (data?.password) {
          setPasswordError(data.password[0]);
          return;
        }
        if (data?.non_field_errors) {
          setCommonError(data?.non_field_errors[0]);
          return;
        }
        setCommonError('Возникла ошибка');
      }
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : ''}

      <div className="position-absolute">
        <InstallButton />
      </div>

      <div className="container-login p-0 auto-overflow hide-scroll-bar">
        <div className="login-form-container">
          <div className="bg-shadow login-form bg-white">
            <h1 className="h4 text-center font-weight-bold pb-3 text-dark">Авторизация</h1>

            <div className="alert alert-success small" role="alert">
              Пример ввода: PetrovAF
            </div>

            {commonError ? (
              <div className="alert alert-danger small" role="alert">
                {commonError}
              </div>
            ) : (
              ''
            )}

            <form onSubmit={submitForm}>
              <div className="input-group has-validation mb-3">
                <input
                  type="text"
                  className={`form-control ${userNameError ? 'is-invalid' : ''}`}
                  data-testid="userName"
                  placeholder="Имя пользователя"
                  aria-label="Имя пользователя"
                  value={userName}
                  onInput={(e) => {
                    setUserName(e.target.value.trim());
                  }}
                />
                <div className="invalid-feedback">{userNameError}</div>
              </div>
              <div className="input-group has-validation mb-4">
                <input
                  type="password"
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  data-testid="userPassword"
                  placeholder="Пароль"
                  aria-label="Пароль"
                  autoComplete="on"
                  value={password}
                  onInput={(e) => {
                    setPassword(e.target.value.trim());
                  }}
                />
                <div className="invalid-feedback">{passwordError}</div>
              </div>
              <button
                type="submit"
                className="btn approve font-weight-ultra-light login-button w-100"
                data-testid="loginButton"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
