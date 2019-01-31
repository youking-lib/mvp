import Virtual from './Base'

export default class IndexView extends Virtual {
  constructor () {
    super()

    this.state = {
      post: []
    }
  }

  get postEl () {
    const postList = this.state.post
    const postItem = data => {
      return (
        <div classNames="post-item">
          <div>title: {data.title}</div>
          <div>subTitle: {data.subTitle}</div>
          <div>thump: {data.thump}</div>
          <div>comment: {data.comment}</div>
        </div>
      )
    }

    return (
      <div classNames="post-list">
        { postList.length ? this.state.post.map(postItem) : '加载中...' }
      </div>
    )
  }

  get view () {
    return (
      <div>
        Index: 
        <a href="#index"> index </a>
        <a href="#post"> post </a>
        <a href="#gamelist"> gamelist </a>
        <a href="#self"> self </a>

        { this.postEl }
      </div>
    )
  }
}
