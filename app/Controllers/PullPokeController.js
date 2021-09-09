import { ProxyState } from "../AppState.js";
import {pokePullService} from "../Services/PokePullService.js"

function _drawPokeList(){
  let template = ''

  ProxyState.pullPoke.forEach(p => template += p.Template)
  document.getElementById('poke-list').innerHTML = template
}




export class PullPokeController {
  constructor () {
    ProxyState.on('pullPoke', _drawPokeList)
    pokePullService.getPoke()
  }

  async getPokeDetail(name) {
  try {
    await pokePullService.getPokeDetails(name)
  } catch (error) {
    console.error('poke detail errors', error)
  }
 }
}