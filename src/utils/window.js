export function getHash () {
  const href = window.location.href
  const i = href.indexOf('#')
  return i > -1 ? href.slice(i + 1) : ''
}
