/**
 * Created by jiangyukun on 2017/4/14.
 */
import React from 'react'

import Select1 from './Select1'

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(item => ({value: item, text: '项目' + item}))

console.log(options);

class Select1Preview extends React.Component {
  state = {
    value: ''
  }

  handleSelectChange = (value) => {
    this.setState({value})
  }

  outputValue = () => {
    alert(this.state.value)
  }

  render() {
    return (
      <div className="select1-preview">
        选择:
        <div className="select-item">
          <Select1 value={this.state.value} options={options} required={true} onSelect={this.handleSelectChange}/>
        </div>
        <button onClick={this.outputValue}>获取当前值</button>
      </div>
    )
  }
}

export default Select1Preview
