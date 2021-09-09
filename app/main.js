import { PullPokeController } from "./Controllers/PullPokeController.js";
import { PushPokeController } from "./Controllers/PushPokeController.js";
import { PokeListController } from "./Controllers/PokeListController.js";


class App {
  
pushPokeController = new PushPokeController()

pullPokeController = new PullPokeController()

pokeListController = new PokeListController()


}

window["app"] = new App();
