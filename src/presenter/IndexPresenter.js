import Base from './Base'
import IndexView from '../view/IndexView'
import postModel from '../model/postModel'

/**
 * Index Page Presenter
 */
export default class IndexPresenter extends Base {
  constructor (app) {
    super(app)

    this.postModel = postModel
    this.view = new IndexView(this)

    this.initPost()
  }

  async initPost () {
    const { data } = await this.postModel.getPost({
      type: 'new'
    })
    if (data) {
      this.view.setState({
        post: data
      })
    }
  }

  /**
   * 路由进入调用
   */
  render () {
    return this.view.render(this.app.$el)
  }
}
