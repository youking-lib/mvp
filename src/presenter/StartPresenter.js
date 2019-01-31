import Base from './Base'

export default class StartPresenter extends Base {
  constructor (app) {
    super(app)
  }

  render (app) {
    app._dom.innerHTML = '<a href="#over">over</a>'
  }
}
