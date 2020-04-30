export interface Films {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}
export interface People {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Species {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Starships {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}

export interface Result {
  title: string;
  name: string;
  model: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
  image?: string;

  
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
}

