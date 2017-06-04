/**
 * Created by wangji on 2017/6/4.
 */

function a(a, b, c) {
  console.log(b)
}

a.apply([2, 3, 4], [1, 2, 3])
