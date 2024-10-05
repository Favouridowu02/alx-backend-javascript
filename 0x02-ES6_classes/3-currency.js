export default class Currency {
  constructor(code, name) {
    for (const inst of [code, name]) {
      if (typeof (inst) !== 'string') {
        throw new TypeError('Code must be a string');
      }
    }
    this._code = code;
    this._name = name;
  }

  // getter method for code
  get code() {
    return this._code;
  }

  // setter method for code
  set code(code) {
    if (typeof (code) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // getter method for name
  get name() {
    return this._name;
  }

  // setter method for name
  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
