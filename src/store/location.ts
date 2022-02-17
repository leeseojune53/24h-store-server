export class Location {
  constructor(type: string, coordinates: number[]) {
    this.type = type;
    this.coordinates = coordinates;
  }
  type: string;
  coordinates: number[];
}
