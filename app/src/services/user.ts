import api from './api';

export const userAuthenticate = (email: string, password: string): any => {
  return api.post('/authenticate', {email, password});
};

export const userUpdatePassword = (email: string, password: string): any => {
  return api.post('/user/update', {email, password});
};
