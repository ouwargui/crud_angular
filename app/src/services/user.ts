import api from './api';

export const userAuthenticate = (email: string, password: string): any => {
  return api.post('/authenticate', {email, password});
};

export const userUpdatePassword = (email: string, password: string): any => {
  return api.post('/user/update', {email, password});
};

export const insertUser = (
  name: string,
  email: string,
  password: string,
): any => {
  return api.post('/user', {name, email, password});
};
