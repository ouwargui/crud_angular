import api from './api';

export const getSneakers = (): any => {
  return api.get('sneakers', {
    baseURL: 'https://the-sneaker-database.p.rapidapi.com',
    params: {limit: '100'},
    headers: {
      'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
      'x-rapidapi-key': '840a08dbf4msh8c852c04ddce14ep1e9fbajsn9aec2c600172',
    },
  });
};
