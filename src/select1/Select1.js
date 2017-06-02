/**
 * 下拉框控件
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {findDOMNode} from 'react-dom'
import classnames from 'classnames'

import {events} from 'dom-helpers'

const keyCode = {
  UP: 38, DOWN: 40, ENTER: 13, ESCAPE: 27
}
const init = 10, increase = 10

class Select1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      value: props.value + '',
      maxLength: init,
      searchKey: '',
      selectIndex: -1,
      touched: false,
      touchIndex: -1
    }
  }

  toggle() {
    if (this.props.disabled) {
      return
    }
    if (this.closeFlag) {
      this.closeFlag = false
      return
    }
    this.setState({active: !this.state.active})
  }

  close() {
    this.setState({active: false, touched: true})
  }

  open() {
    if (this.props.disabled) {
      return
    }
    this.setState({active: true, touchIndex: this.state.selectIndex})
  }

  // 点击选项
  select(option, index) {
    this.setState({value: option.value, selectIndex: index})
    this.props.onSelect(option.value, option.text)
    this.close()
  }

  reset() {
    this.setState({value: '', selectIndex: -1})
  }

  touch(index) {
    this.setState({touchIndex: index})
  }

  search(event) {
    let searchKey = event.target.value.trim()
    this.setState({searchKey})
  }

  showMoreItems() {
    this.setState({maxLength: this.state.maxLength + increase})
  }

  activeOpenFlag() {
    this.openFlag = true
  }

  handleDocumentClick = () => {
    if (this.openFlag) {
      this.openFlag = false
      return
    }
    if (this.state.active) {
      this.close()
    }
  }

  handleContainerKeyDown = (event) => {
    if (!this.state.active) {
      switch (event.which) {
        case keyCode.ENTER:
          this.open()
          break
        default:
          break
      }
      return
    }
    switch (event.which) {
      case keyCode.ESCAPE:
        event.stopPropagation()
        this.close()
        break
      case keyCode.DOWN:
        if (this.state.touchIndex + 1 <= this.currentCount - 1) {
          this.setState({touchIndex: this.state.touchIndex + 1})
        }
        break
      case keyCode.UP:
        if (this.state.touchIndex - 1 >= 0) {
          this.setState({touchIndex: this.state.touchIndex - 1})
        }
        break
      case keyCode.ENTER:
        let touchIndex = this.state.touchIndex
        let options = this.props.options
        if (touchIndex >= 0 && touchIndex < options.length) {
          this.select(options[touchIndex], touchIndex)
        }
        break
      default:
        break
    }
  }

  handleClearBtnClick = () => {
    this.closeFlag = true
    this.setState({value: '', showClose: false})
    this.props.onClear()
  }

  componentDidMount() {
    events.on(findDOMNode(this._container), 'keyup', this.handleContainerKeyDown)
    events.on(document, 'click', this.handleDocumentClick)
  }

  componentWillReceiveProps(nextProps) {
    let nextValue = nextProps.value + ''
    if (nextValue !== this.state.value) {
      this.setState({value: nextValue})
    }
  }

  componentWillUnmount() {
    events.off(findDOMNode(this._container), 'keyup', this.handleContainerKeyDown)
    events.off(document, 'click', this.handleDocumentClick)
  }

  render() {
    let selectText = '请选择'
    this.props.options.forEach(option => {
      if (option.value == this.state.value) {
        selectText = option.text
      }
    })
    let showMore = false, noMatch = true

    let showSelectItems = () => {
      let currentCount = 0, filterTotalCount = 0
      try {
        return this.props.options.map((option, index) => {
          if (option.text.indexOf(this.state.searchKey) != -1) {
            noMatch = false
            filterTotalCount++
            if (currentCount < this.state.maxLength) {
              currentCount++
              return (
                <li key={index}
                    className={classnames('select-item', {'selected': index == this.state.selectIndex}, {'last-touched': index == this.state.touchIndex})}
                    onClick={e => this.select(option, index)}
                    onMouseEnter={e => this.touch(index)}>
                  {option.text}
                </li>
              )
            }
            return null
          }
        })
      } finally {
        this.currentCount = currentCount
        if (currentCount != filterTotalCount) {
          showMore = true
        }
      }
    }

    return (
      <div ref={c => this._container = c}
           className={classnames('select1-container', {'disabled': this.props.disabled}, this.props.className)}
           onClick={e => this.activeOpenFlag(e)}
           onMouseEnter={e => this.setState({showClose: true})}
           onMouseLeave={e => this.setState({showClose: false})}
           tabIndex="-1">
        <div onClick={e => this.toggle()}
             className={classnames('selected-item',
               {'open': this.state.active},
               {'invalid': this.props.required && this.state.touched && !this.state.value})}
        >
          <span className="select-item-text">{selectText}</span>
          <span className="dropdown"><b></b></span>
          {
            this.props.showClear && this.state.showClose && this.state.value && (
              <span className="close-btn" onClick={this.handleClearBtnClick}>
                <i className="fa fa-close"></i>
              </span>
            )
          }
        </div>

        {
          this.state.active && (
            <div className="all-select-items">
              {
                this.props.options.length > 10 && (
                  <input value={this.state.searchKey} className="search" onChange={e => this.search(e)}
                         placeholder="请输入查询条件"/>
                )
              }
              <ul className="select-items-container">
                {showSelectItems()}
                {
                  showMore && (
                    <li className="show-more" onClick={e => this.showMoreItems()}>
                      <span>加载更多...</span>
                    </li>
                  )
                }
              </ul>
              {
                noMatch && (
                  <div className="no-match-result">
                    <span>暂无符合条件的数据</span>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    )
  }
}

Select1.defaultProps = {
  value: '',
  showClear: false,
  disabled: false,
  options: [],
  onSelect: function () {},
  onClear: function () {}
}

Select1.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
  showClear: PropTypes.bool,
  onSelect: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool
}

export default Select1
