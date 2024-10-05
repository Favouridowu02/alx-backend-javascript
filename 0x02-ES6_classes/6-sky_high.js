import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqrt, floors) {
    if (typeof (sqrt) !== 'number') {
      throw new TypeError('Sqrt must be a number');
    }
    if (typeof (floors) !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    super(sqrt);
    this._sqft = sqrt;
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof (floors) !== 'number') {
      throw new TypeError('Floor must be a number');
    }
    this._floors = floors;
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(sqrt) {
    if (typeof (sqrt) !== 'number') {
      throw new TypeError('Sqrt must be a number');
    }
    this._sqrt = sqrt;
  }

  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors`);
  }
}
