import Virtual from './Base'

export default class GamelistView extends Virtual {
  constructor () {
    super()
  }

  get view () {
    return (
      <div>
        gamelist: 
        <a href="#index"> index </a>
        <a href="#post"> post </a>
        <a href="#gamelist"> gamelist </a>
        <a href="#self"> self </a>
      </div>
    )
  }
}
