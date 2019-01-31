import Base from './Base'

export default class OverPresenter extends Base {
  constructor (app) {
    super(app)
  }

  render (app) {
    app._dom.innerHTML = '<a href="#index">index</a>'
  }
}
