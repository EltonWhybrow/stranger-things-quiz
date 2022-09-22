
export interface ICreator {
  name: string;
  url: string;
}

export interface IShowInfo {
  synopsis: string;
  yearsAired: string;
  creators: ICreator[];
  id: number;
}

