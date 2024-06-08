const KEYS = {
  chats: true,
  config: true
}

export default class Store {

  static clear () {
    localStorage.clear()
  }

  static get (key : keyof typeof KEYS) {
    if (!KEYS[key]) throw new Error(`Key not allowed: ${key}`)
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }

  static set (key : keyof typeof KEYS, value : any) {
    if (!KEYS[key]) throw new Error(`Key not allowed: ${key}`)
    localStorage.setItem(key, JSON.stringify(value))
  }

}