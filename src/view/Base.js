import Virtual from '../common/vm'

export default class Base extends Virtual {
  constructor (opt = {}) {
    super(opt)
    this.state = {}
  }

  setState (state) {
    this.state = {
      ...this.state,
      ...state
    }
    
    if (this.$el) {
      this.render(this.$el)
    }
  }

  render ($el) {
    this.$el = this._patch($el, this.view)
    return this.$el
  }
}
