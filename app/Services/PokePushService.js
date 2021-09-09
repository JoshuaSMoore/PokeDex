import { ProxyState } from "../AppState.js";
import { PushPoke } from "../Models/PushPoke.js";


// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})


class PokePushService {
  async toggleCaught(name) {
    const poke = ProxyState.pullPoke.find(p => p.name === name)
    poke.caught = !poke.caught
    await sandboxApi.put('${ProxyState.user}/pokemon/${pokeId}', poke)
  }

  async catchPoke(){
    const pokeToCatch = new PushPoke(ProxyState.currentPoke)
    let res = await sandboxApi.post('${ProxyState.user}/pokemon',pokeToCatch)
    ProxyState.pushPoke = [...ProxyState.pushPoke, new PushPoke(res.data)]
  }

  async getPoke(){
    let res = await sandboxApi.get('${ProxyState.user}/pokemon')
    console.log('log the res!', res)
    ProxyState.pushPoke = res.data.map(p => new PushPoke(p))
  }
}

export const pokePushService = new PokePushService()