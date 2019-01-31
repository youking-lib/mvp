import Base from './Base'
import SelfView from '../view/SelfView'

/**
 * Index Page Presenter
 */
export default class SelfPresenter extends Base {
  constructor (app) {
    super(app)

    this.view = new SelfView(this)
  }

  /**
   * 路由进入调用
   */
  render () {
    return this.view.render(this.app.$el)
  }
}
