/**
 * 展开运算符，箭头函数
 * Created by wangji on 2017/4/14.
 */

function openOperation(option) {
  let {name} = option

  let name1 = option.name1

}


const a = () => 1


function a1() {
  return 1
}


const b = (arg) => arg


function b1(arg) {
  return arg
}


const add = (x) => (y) => x + y

function add1(x) {
  return function (y) {
    return x + y
  }
}

add(1)(2)
