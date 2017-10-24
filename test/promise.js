var i = 0
setTimeout(() => {
  console.log(1, ++i)
  Promise.resolve('-------->1').then(data => console.log(data, ++i))
}, 0)

setTimeout(function () {
  console.log(2, ++i)
  Promise.resolve('-------->2').then(data => console.log(data, ++i))
}, 0)
