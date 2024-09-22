export enum UniversityType {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface University {
  id?: number;
  name: string;
  address: string;
  universityType: UniversityType;
  rating: number;
  description: string;
  image?: string;
  startingDate: Date;
  casuallyOpensAt: Date;
  otherInformation: { [key: string]: any };
}
