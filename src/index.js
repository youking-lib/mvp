import IndexPresenter from './presenter/IndexPresenter'
import PostPresenter from './presenter/PostPresenter'
import GamelistPresenter from './presenter/GamelistPresenter'
import SelfPresenter from './presenter/SelfPresenter'
import * as utils from './utils'

const DEFAULT_HASH = 'index'

class Main {
  constructor () {
    this.$el = document.querySelector('#app')

    this.hashMap = {}
    this.hash = ''

    this.initPage()
    this.initHash()
    
  }

  initPage () {
    this.hashMap.index = new IndexPresenter(this)
    this.hashMap.post = new PostPresenter(this)
    this.hashMap.gamelist = new GamelistPresenter(this)
    this.hashMap.self = new SelfPresenter(this)
    
    // this.notFound = new IndexPresenter(this)
  }

  initHash () {
    window.onhashchange = this._handleHashChange
    
    this._handleHashChange()
  }

  _handleHashChange = () => {
    const fromHash = this.hash
    const toHash = this.getHash()
    
    this.switchHash(toHash, fromHash)
  }
  
  /**
   * 路由切换
   * @param {String} to 
   * @param {String} from 
   */
  switchHash (to, from) {
    const fromPresenter = this.hashMap[from]
    const toPresenter = this.hashMap[to] || this.hashMap[DEFAULT_HASH]

    fromPresenter && fromPresenter.routeLeave && fromPresenter.routeLeave()
    
    const next = () => {
      this.$el = toPresenter.render(this)
      this.hash = to
    }
    toPresenter.routeEnter ? toPresenter.routeEnter(next) : next()
  }

  getHash () {
    return utils.getHash() || DEFAULT_HASH
  }
}

new Main()
