// Data model interfaces for Swaraj Fort project
export interface Fort {
  id: string;
  name: string;
  nameMr?: string;
  district: string;
  type: "Hill" | "Sea" | "Island" | "Forest" | "Land";
  altitude?: number;
  lat: number;
  lng: number;
  length?: number;
  width?: number;
  image: string;
  imageCredit?: string;
  shortDescription: string;
  history?: string;
  significance?: string;
  builtBy?: string;
  yearBuilt?: number;
  unesco?: boolean;
  battleIds?: string[];
  difficulty?: string;
  bestSeason?: string;
}

export interface Battle {
  id: string;
  name: string;
  nameMr?: string;
  startYear: number;
  endYear?: number;
  date?: string; // optional exact date string
  rulerId: string;
  fortIds: string[];
  location?: string;
  lat?: number;
  lng?: number;
  opponent: string;
  commander?: string;
  outcome: string;
  summary: string;
  significance?: string;
  sourceIds: string[];
  confidence: "high" | "medium" | "low";
  dateNote?: string;
}

export interface Event {
  id: string;
  year: number;
  title: string;
  description: string;
  personIds?: string[];
  fortIds?: string[];
  category: "birth" | "battle" | "treaty" | "coronation" | "administration" | "death" | "other";
  sourceIds: string[];
  confidence: "high" | "medium" | "low";
  dateNote?: string;
}

export interface Person {
  id: string;
  name: string;
  role: string;
  bornYear?: number;
  diedYear?: number;
  bio: string;
  imageCredit?: string;
}

export interface Source {
  id: string;
  title: string;
  author?: string;
  type: "primary" | "secondary" | "web";
  note?: string;
}
