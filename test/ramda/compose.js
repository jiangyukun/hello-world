let ramda = require('ramda')

let compose = ramda.compose


function a(x) {
  return b
}

function b(a, b, c) {
  console.log(c)
  return 2
}

let xx = compose(a, b)

console.log(xx(1, 2, 3))
