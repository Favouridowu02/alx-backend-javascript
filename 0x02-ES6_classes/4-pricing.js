import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('c');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a type of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof (conversionRate) !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return (amount * conversionRate);
  }
}