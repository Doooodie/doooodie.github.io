import { ObjectConstructor } from "../ObjectConstructor.js";

class Ptero extends ObjectConstructor {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
		this.speed = 2;
		this.distance = 0;
		this.flitterCount = 0;
		this.flySound = new Audio();
		this.deadSound = new Audio();
		this.flySound.src = "./assets/sounds/button-press.mp3";
		this.deadSound.src = "./assets/sounds/hit.mp3";
	}

	flitter() {
		if (this.sx == 130) {
			this.sx = 176;
			this.height = 34;
			this.dHeight = this.height;
		} else {
			this.sx = 130;
			this.height = 30;
			this.dHeight = this.height;
		}
	}

	fly(keydown, keyup, keyleft, keyright) {
		if (keydown && this.dy < 110) {
			this.dy += 2;
		} else if (keyup && this.dy > 50) {
			this.dy -= 2;
		} else if (keyleft && this.dx > 10) {
			this.dx -= 2;
		} else if (keyright && this.dx < 550) {
			this.dx += 2;
		}
	}

	isCrashed(obj) {
		if (
			this.dx + this.width - 50 > obj.dx &&
			this.dx < obj.dx + obj.width &&
			this.dy + this.height - 50 > obj.dy &&
			this.dy < obj.dy + obj.height
		) {
			return true;
		} else {
			return false;
		}
	}
}

export default new Ptero(130, 1, 46, 30, 50, 100);
