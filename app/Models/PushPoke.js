export class PushPoke {
    constructor(pokeData){
      this.id = pokeData.id 
      this.name = pokeData.name
      this.weight = pokeData.weight
      this.caught = pokeData.caught
    }



get Template() {
  return /*html*/`
  <li class = "list-group-item py-2">
  <input type = "checkbox" ${this.caught ? 'checked' : ''} onclick ="app.pushPokeController.toggleCaught('${this.name}')">
  <span class = "ms-2">${this.name}</span>
  </li>
  `
}

}



