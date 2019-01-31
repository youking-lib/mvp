import Base from './Base'
import PostView from '../view/PostView'

/**
 * Index Page Presenter
 */
export default class PostPresenter extends Base {
  constructor (app) {
    super(app)

    this.view = new PostView(this)
  }

  /**
   * 路由进入调用
   */
  render () {
    return this.view.render(this.app.$el)
  }
}
