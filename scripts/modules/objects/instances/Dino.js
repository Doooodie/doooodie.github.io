import { ObjectConstructor } from "../ObjectConstructor.js";

class Dino extends ObjectConstructor {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
		this.jumpCount = 0;
		this.jumpCount = 0;
	}

	jump() {
		if (this.jumpCount >= 100) {
			this.jumpCount = 0;
		} else if (this.jumpCount < 50) {
			this.dy--;
			this.jumpCount++;
		} else if (this.jumpCount >= 50) {
			this.dy++;
			this.jumpCount++;
		}
	}
}

let dino = new Dino(1176, 1, 44, 47, 400, 100);

export { Dino, dino };
