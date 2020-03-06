import dynamicObjects from "./DynamicObjects.js";
import { ptero, sun } from "./ObjectConstructor.js";

class Objects {
	constructor() {
		this.staticObjects = [ptero, sun];
	}

	draw(ctx) {
		this.staticObjects.forEach(object => {
			object.draw(ctx);
		});

		dynamicObjects.draw();
	}
}

export default new Objects();
