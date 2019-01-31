import Virtual from './Base'

export default class PostView extends Virtual {
  constructor () {
    super()
  }

  get view () {
    return (
      <div>
        Post: 
        <a href="#index"> index </a>
        <a href="#post"> post </a>
        <a href="#gamelist"> gamelist </a>
        <a href="#self"> self </a>
      </div>
    )
  }
}
