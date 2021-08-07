'use strict';

class StringBuilder{
  constructor(value){
    this._value = value;
  }
  get value(){
    return this._value
  }
  append(str){
    let items = this._value.split('');
    items.push(str);
    this._value = items.join('')
    return this._value
  }
  prepend(str){
    let items = this._value.split('');
    items.unshift(str);
    this._value = items.join('')
    return this._value
  }
  pad(str){
    let items = this._value.split('');
    items.unshift(str);
    items.push(str);
    this._value = items.join('')
    return this._value
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='