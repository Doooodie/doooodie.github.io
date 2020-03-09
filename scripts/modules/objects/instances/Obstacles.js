import { Dino, dino } from "./Dino.js";
import ptero from "./Ptero.js";
import canvas from "../../Canvas.js";

class Obstacles {
	constructor() {
		this.dinos = [dino];
	}

	drawImage(obj) {
		obj.draw(canvas.ctx);

		obj.dx -= ptero.speed;

		if (obj.sx == dino.sx) {
			obj.jump();

			if (obj.dx == 240) {
				this.dinos.push(new Dino(1176, 1, 44, 47, canvas.cvs.width, 100));
			}
		}
	}

	draw() {
		this.dinos.forEach(dino => {
			this.drawImage(dino);

			if (dino.dx == -3000) {
				this.dinos.shift();
			}

			if (ptero.isCrashed(dino) == true) {
				ptero.deadSound.play();
				ptero.flySound = null;
				canvas.cvs = null;
			}
		});
	}
}

export default new Obstacles();
