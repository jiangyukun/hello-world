/**
 * props和props的children属性
 * 组件交互
 * Created by jiangyukun on 2017/4/14.
 */
import React from 'react'

class HelloWorld2 extends React.Component {
  handleBtnClick = () => {
    alert('inner button click')
    this.inner.a()
  }

  render() {
    return (
      <Outer name="xx">
        <Inner ref={c => this.inner = c} onBtnClick={this.handleBtnClick}/>
      </Outer>
    )
  }
}

class Outer extends React.Component {

  render() {
    return (
      <div>
        outer get name {this.props.name}
        {this.props.children}
      </div>
    )
  }
}


class Inner extends React.Component {

  a() {

  }

  render() {
    return (
      <div>
        <button onClick={this.props.onBtnClick}>inner button</button>
      </div>
    )
  }
}


export default HelloWorld2
