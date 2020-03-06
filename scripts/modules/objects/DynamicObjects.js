import canvas from "../Canvas.js";

import {
	ObjectConstructor,
	Score,
	ptero,
	aliveDino,
	deadDino,
	smallCactus,
	bigCactus,
	cloud,
	foreground
} from "./ObjectConstructor.js";

class DynamicObjects {
	constructor() {
		this.score = new Score(canvas.cvs, canvas.ctx);
		this.aliveDinos = [aliveDino];
		this.foregrounds = [foreground];
		this.clouds = [cloud];
		this.objects = [this.aliveDinos, this.foregrounds, this.clouds];
		this.speed = 5;
	}

	drawImage(obj) {
		obj.draw(canvas.ctx);

		obj.dx -= this.speed;

		if (obj.sx == aliveDino.sx && obj.dx == 120) {
			this.aliveDinos.push(
				new ObjectConstructor(1176, 1, 44, 47, canvas.cvs.width, 100)
			);
		} else if (obj.sx == foreground.sx && obj.dx == -600) {
			this.foregrounds.push(
				new ObjectConstructor(1, 52, 1200, 12, 0 + canvas.cvs.width, 135)
			);
		} else if (obj.sx == cloud.sx) {
			if (obj.dx == 400) {
				this.score.amount++;

				this.clouds.push(
					new ObjectConstructor(
						83,
						1,
						46,
						13,
						canvas.cvs.width,
						Math.floor(Math.random() * obj.height) + obj.height
					)
				);
			}
		}
	}

	draw() {
		this.score.draw();

		if (this.score.amount % 10 == 0 && this.score.amount > 0) {
			this.score.sound.play();
		}

		if (this.score.amount == this.speed) {
			// this.speed += 0.2;
		}

		this.objects.forEach(obj => {
			for (let i = 0; i < obj.length; i++) {
				this.drawImage(obj[i]);

				if (ptero.isCrashed(obj[i]) == true) {
					ptero.deadSound.play();
					ptero.flySound = null;
					canvas.cvs = null;
				}

				if (obj[i].dx == -3000) {
					obj.shift();
				}
			}
		});
	}
}

export default new DynamicObjects();
