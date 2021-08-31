import Sneaker from '../models/sneaker';
import api from './api';

export const getSneakers = (): any => {
  return api.get('sneakers');
};

export const insertSneakers = (sneakers: Sneaker[]): any => {
  return api.post('/sneaker', sneakers);
};
