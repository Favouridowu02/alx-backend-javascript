export default class Airport {
  constructor(name, code) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof (code) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // This method would be called when the user uses the toString() method
  // on an instance of the class
  toString() {
    return `[Object ${this._code}]`;
  }
}
