import SneakerModel from '../models/sneaker';
import api from './api';

export const getSneakers = (): any => {
  return api.get('sneakers');
};

export const insertSneakers = (sneakers: SneakerModel[]): any => {
  return api.post('/sneakers', sneakers);
};

export const getSneakerById = (id: number): any => {
  const idObject = {
    id,
  };
  const params = JSON.stringify(idObject);
  return api.post('/sneaker/id', params);
};
