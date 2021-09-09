import { ProxyState } from "../AppState.js";
import { pokePushService } from "../Services/PokePushService.js";


function _drawPokeDeck(){
let template = ''
ProxyState.pushPoke.forEach(c => template += c.Template)
document.getElementById('sandbox-poke').innerHTML = template
  

}
export class PushPokeController {
  constructor () {
    ProxyState.on('pushPoke', _drawPokeDeck)
    pokePushService.getPoke()
  }

  async catchPoke(){
    try {
      await pokePushService.catchPoke()
    } catch (error) {
      console.log('unable to catch')
  }
}

async toggleCaught(name){
  try {
    await pokePushService.toggleCaught(name)
} catch (error){
  console.log('unable to catch poke')
}
}

}