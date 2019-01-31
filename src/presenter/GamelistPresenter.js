import Base from './Base'
import GamelistView from '../view/GamelistView'

/**
 * Index Page Presenter
 */
export default class GamelistPresenter extends Base {
  constructor (app) {
    super(app)

    this.view = new GamelistView(this)
  }

  /**
   * 路由进入调用
   */
  render () {
    return this.view.render(this.app.$el)
  }
}
