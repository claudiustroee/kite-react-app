import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  // const removeToken = userToken => {
  //   sessionStorage.removeItem('token', JSON.stringify(userToken));
  // };

  return {
    // deleteToken: removeToken,
    setToken: saveToken,
    token
  }
}