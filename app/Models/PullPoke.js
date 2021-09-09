export class PullPoke{
constructor(pokeData){
  this.id = pokeData.id 
  this.name = pokeData.name
  this.weight = pokeData.weight
  this.caught = pokeData.caught
}


get Template() {
  return /*html*/`
    <div class="card elevation-2">
      <div class="card-header">
        <h3>${this.name}</h3>
      </div>
      <div class="card-body scrollable-y" style="max-height:50vh;">
        <p>${this.weight}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-success" onclick="app.pushPokeController.catchPoke()">Catch</button>
      </div>
    </div>
  `
}

}