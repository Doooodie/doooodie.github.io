import { sun } from "./ObjectConstructor.js";
import Background from "./instances/Background.js";
import Obstacles from "./instances/Obstacles.js";
import ptero from "./instances/Ptero.js";

class Objects {
	constructor() {
		this.staticObjects = [ptero, sun];
	}

	draw(ctx) {
		this.staticObjects.forEach(object => {
			object.draw(ctx);
		});

		Background.draw();
		Obstacles.draw();
	}
}

export default new Objects();
