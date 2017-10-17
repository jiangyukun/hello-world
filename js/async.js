/**
 * Created by wangji on 2017/9/24.
 */

async function a() {

   return b()
}

async function b() {
  let x = c()
  throw new Error('x')
}

async function c() {
  return 1
}


a().catch((e) => {
  console.log(1)
})

