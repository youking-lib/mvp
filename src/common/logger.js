const console = window.console

/**
 * 日志级别：none, debug, info, warn, error
 * warn 和 error级别会上报
 */
class Logger {
  constructor () {}

  log (...args) {
    console.log(...args)
  }
}

const logger = new Logger()
