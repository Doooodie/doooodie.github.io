import { ObjectConstructor, cloud, foreground } from "../ObjectConstructor.js";
import canvas from "../../Canvas.js";
import score from "./Score.js";
import ptero from "./Ptero.js";

class Background {
	constructor() {
		this.foregrounds = [foreground];
		this.clouds = [cloud];
		this.objects = [this.foregrounds, this.clouds];
	}

	drawImage(obj) {
		obj.draw(canvas.ctx);

		if (obj.sx == foreground.sx) {
			obj.dx -= ptero.speed;

			if (Math.floor(obj.dx) == -600) {
				const newForeground = new ObjectConstructor(1, 52, 1200, 12, 0 + canvas.cvs.width, 135)
				this.foregrounds.push(newForeground);
			}
		} else if (obj.sx == cloud.sx) {
			obj.dx -= ptero.speed * 0.25;
			if (obj.dx == 400) {
				const randomHeight = Math.floor(Math.random() * obj.height) + obj.height;
				const newCloud = new ObjectConstructor(83, 1, 46, 13, canvas.cvs.width, randomHeight);
				this.clouds.push(newCloud);
			}
		}
	}

	draw() {
		this.objects.forEach(obj => {
			for (let i = 0; i < obj.length; i++) {
				this.drawImage(obj[i]);
				if (obj[i].dx == -3000) {
					obj.shift();
				}
			}
		});

		score.draw(ptero);
	}
}

export default new Background();
