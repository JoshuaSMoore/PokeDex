import { ProxyState } from "../AppState.js";


function _drawcurrentPoke(){
  console.log('did it work?', ProxyState.currentPoke);
  document.getElementById('current-poke').innerHTML = ProxyState.currentPoke.Template
}



export class PokeListController {
  constructor () {
    ProxyState.on('currentPoke', _drawcurrentPoke)

  }
}