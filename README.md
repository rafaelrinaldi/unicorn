# giz

`giz` is a tiny little library made to add some color to the command line and the browser console.
It was first written in the beginning of 2012 and it was called `unicorn` back then.

## Usage

```js
var giz = require('giz'),
    red = giz.red,
    green = giz.green,
    blue = giz.blue;

function error(message) {
  console.log(giz(message).red);
}

giz('foo').bgBlue
giz('foo').blue(true);

console.log(giz('I am blue').blue );
```
