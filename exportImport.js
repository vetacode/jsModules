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

//Export 'as' caranya:
// 📁 say.js
// ...
export { sayHi as hi, sayBye as bye };

//EXPORT DEFAULT: more preferred
// 📁 user.js
export default class User {
  // just add "default"
  constructor(name) {
    this.name = name;
  }
}

//NOTES: only one export default per file.

//How to Import:
// 📁 main.js
import User from './user.js'; // not {User}, just User

new User('John');

//can also choose any name to import
import User from './user.js'; // works
import MyUser from './user.js'; // works too
// could be import Anything... and it'll still work

//Re-export
export { sayHi } from './say.js'; // re-export sayHi

export { default as User } from './user.js'; // re-export default
