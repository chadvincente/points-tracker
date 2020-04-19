interface Status {
  earnRate: string;
  level: number;
  name: string;
}

export interface Program {
  alliance?: string;
  logo: string;
  name: string;
  pointValueMultiplier: number;
  statuses?: Status[];
  title: string;
  url: string;
}
