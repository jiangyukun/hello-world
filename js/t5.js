/**
 * Created by wangji on 2017/6/4.
 */

function A() {
  this.x = 1
}

A.prototype.getX = function () {
  return this.x
}

var a = new A()
var getX = a.getX
console.log(getX())
