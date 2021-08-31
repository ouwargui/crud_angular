export default interface Sneaker {
  id: string;
  sku: string;
  brand: string;
  name: string;
  colorway: string;
  gender: string;
  silhouette: string;
  releaseYear: number;
  releaseDate: string;
  retailPrice: number;
  estimatedMarketValue: number;
  story: string;
  image: {
    '360': any[];
    original: string;
    small: string;
    thumbnail: string;
  };
  links: {
    stockX: string;
    goat: string;
    flightClub: string;
    stadiumGoods: string;
  };
}
