export class PokeList{
  constructor(pokeData){
    this.id = pokeData.id 
    this.name = pokeData.name
    this.weight = pokeData.weight
    this.caught = pokeData.caught
  }

get Template() {
  return /*html*/`
    <li class="list-group-item py-2 selectable" onclick="app.pullPokeController.getPokeDetail('${this.name}')">${this.name}</li>
  `
}

}
