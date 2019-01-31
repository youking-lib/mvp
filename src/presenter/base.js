export default class {
  constructor (app) {
    this.app = app
  }

  routeLeave () { console.log('route leave') }
  routeEnter (next) { next(); console.log('route enter') }
}
