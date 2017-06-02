/**
 * Created by jiangyukun on 2017/5/31.
 */

console.log(true || false && false)
console.log(null == undefined)
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i)
  } else {
    setTimeout(function () {
      console.log(i)
    }, 0)
  }
}
