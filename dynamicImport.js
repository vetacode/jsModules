'use strict';

// The import() expression
let modulePath = 'Which module to load?';

import(modulePath);
// .then(obj => <module object>);
// .catch(err => <loading error, e.g. if no such module>)

{
  //Inside async
  // 📁 say.js
  // export function hi() {
  //   alert(`Hello`);
  // }

  // export function bye() {
  //   alert(`Bye`);
  // }

  let { hi, bye } = await import('./say.js');

  hi();
  bye();
}

{
  //If export use default:
  // 📁 say.js
  // export default function() {
  //   alert("Module loaded (export default)!");}
  let obj = await import('./say.js');
  let say = obj.default;
  // or, in one line: let {default: say} = await import('./say.js');

  say();
}

//NOTES: Dynamic imports work in regular scripts, they don’t require script type="module".

//Although import() looks like a function call, it’s a special syntax that just happens to use parentheses (similar to super()).

// So we can’t copy import to a variable or use call/apply with it. It’s not a function.
