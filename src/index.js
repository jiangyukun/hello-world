/**
 * Created by jiangyukun on 2017/4/14.
 */
import React from 'react'
import {render} from 'react-dom'

import './css/common.scss'
import './css/hello-world-1.scss'
import './css/hello-world-2.scss'
import './css/hello-world-3.scss'
import './css/select1.scss'
import './css/select1-preview.scss'

import HelloWorld1 from './hello-world-1/HelloWorld1'
import HelloWorld2 from './hello-world-2/HelloWorld2'
import HelloWorld3 from './hello-world-3/HelloWorld3'
import Select1Preview from './select1/Select1Preview'


let current = 3


const mapper = {
  1: HelloWorld1,
  2: HelloWorld2,
  3: HelloWorld3,
  4: Select1Preview,
}
let Component = mapper[current]


render(<Component/>, document.querySelector('#root'))
