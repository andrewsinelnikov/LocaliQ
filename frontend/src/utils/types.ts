export interface IProducer {
  id: number;
  name: string;
  category: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}
