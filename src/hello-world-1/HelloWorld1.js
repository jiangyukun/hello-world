/**
 * Created by jiangyukun on 2017/4/14.
 */
import React from 'react'

class HelloWorld1 extends React.Component {

  /*
   * 每个组件都必须有的方法
   * */
  render() {

    /*
     *
     * 最外层只能有一个元素
     * 可以返回null
     * 不能返回数组
     *
     * 区别于html中的写法
     * class 改为 className
     * style 改为对象
     * */
    return (
      <div className="hello-world-1" style={{width: '100px', border: '1px solid #aaa'}}>
        {
          ['a', 'c', 'c'].map((item, index) => {
            /*
             * 列表元素需要的key属性，用于识别元素的新增，修改，和删除
             * */
            return (
              <div key={index}>{item}</div>
            )
          })
        }
      </div>
    )
  }
}

export default HelloWorld1
