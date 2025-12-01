'use strict';

//EXPORTING
//Export before declarations
// export an array
export let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

//Export apart from declarations
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // a list of exported variables

//IMPORTING
// 📁 main.js
import { sayHi, sayBye } from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

//Import all: import * as <obj>
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');

//Import “as”:  to import under different names.
//dipake biar lebih ringkas/simple saat pemanggilan
// 📁 main.js
import { sayHi as hi, sayBye as bye } from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
