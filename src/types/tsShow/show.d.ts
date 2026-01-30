interface IShow {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  ended: string;
  rating: {
    average: number
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
}

export default IShow;