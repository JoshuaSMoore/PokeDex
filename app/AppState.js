import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // user = "Josh"

  /** @type {import('./Models/PushPoke.js').PushPoke[]} */
  pushPoke = []

   /** @type {import('./Models/PullPoke.js').PullPoke[]} */
  pullPoke = []
  
  /** @type {import('./Models/PokeList.js').PokeList} */
  currentPoke = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
