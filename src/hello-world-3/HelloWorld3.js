/**
 * 生命周期
 * Created by jiangyukun on 2017/4/14.
 */
import React from 'react'

class HelloWorld3 extends React.Component {
  state = {
    showLifeCycle: true
  }

  render() {
    console.log('--------------')
    return (
      <div className="hello-world-3">
        <div>父组件</div>
        <button onClick={() => this.setState({showLifeCycle: !this.state.showLifeCycle})}>
          {this.state.showLifeCycle ? '销毁' : '初始化'} LifeCycle 组件
        </button>
        {
          this.state.showLifeCycle && (
            <LifeCycle/>
          )
        }
      </div>
    )
  }
}

class LifeCycle extends React.Component {
  constructor() {
    super()
    console.log('LifeCycle 初始化')
  }

  state = {
    update: 0
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceive(nextProps) {
    console.log('componentWillReceive')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount LifeCycle销毁')
  }

  render() {
    console.log('render')
    return (
      <div className="inner-component">
        <div>子组件</div>
        <button onClick={() => this.setState({update: this.state.update++})}>调用更新生命周期</button>
      </div>
    )
  }
}

export default HelloWorld3
