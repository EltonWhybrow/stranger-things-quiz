
export interface Name {
  first: string;
  middle: string;
  last: string;
}

export interface Images {
  'head-shot': string;
  main: string;
}

export interface ICharacter {
  name: Name;
  images: Images;
  age: string;
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: string[];
  id: number;
}

