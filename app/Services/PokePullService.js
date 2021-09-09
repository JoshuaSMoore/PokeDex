import { ProxyState } from "../AppState.js";
import { PokeList } from "../Models/PokeList.js";
import { PullPoke } from "../Models/PullPoke.js";





// @ts-ignore
const PokePullApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon'
})


class PokePullService {
  async getPokeDetails(weight) {
    let res = await PokePullApi.get(weight)
    ProxyState.currentPoke = new PullPoke(res.data)
  }

  async getPoke(){
    let res = await PokePullApi.get()
    console.log('log the res!', res.data.results)
    ProxyState.pullPoke = res.data.results.map(p => new PokeList(p))
  }
}

export const pokePullService = new PokePullService()