import { UniversityType } from './university';

export class UniversityOBJECT {
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

  constructor() {
    this.id = undefined;
    this.name = '';
    this.address = '';
    this.universityType = UniversityType.PUBLIC;
    this.rating = 0;
    this.description = '';
    this.image = undefined;
    this.startingDate = new Date();
    this.casuallyOpensAt = new Date();
    this.otherInformation = {};
  }
}
