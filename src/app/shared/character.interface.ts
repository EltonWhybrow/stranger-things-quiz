
export interface Name {
  show: string;
  real: string;
}

export interface Images {
  main: string;
}

export interface ICharacter {
  name: Name;
  images: Images;
  gender: string;
  occupation: string;
  nicknames: string;
  sayings: string[];
  age: string;
  id: number;
}

