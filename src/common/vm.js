import JSX from 'snabbdom-jsx'
import * as snabbdom from 'snabbdom'
import className from 'snabbdom/modules/class'
import props from 'snabbdom/modules/props'
import style from 'snabbdom/modules/style'
import attrs from 'snabbdom/modules/attributes'
import dataset from 'snabbdom/modules/dataset'
import eventlisteners from 'snabbdom/modules/eventlisteners'

const patch = snabbdom.init([
  className,
  attrs,
  props,
  dataset,
  style,
  eventlisteners
])

export default class Virtual {
  constructor (opt) {
    this._vm = null
    
    this.opt = {
      on: {},
      attrs: {},
      props: {},
      tag: 'div',
      dataset: {},
      ...opt,
      class: { ...opt.class },
      style: { ...opt.style }
    }
  }

  static patch = patch
  static renderHtml = JSX.html

  _patch (oldVm, newVm) {
    return patch(oldVm, newVm)
  }
}
