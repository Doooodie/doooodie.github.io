import canvas from "../../Canvas.js";

class Score {
	constructor() {
		this.font = "14px 'Press Start 2P'";
		canvas.ctx.font = this.font;

		this.sound = new Audio();
		this.sound.src = "./assets/sounds/score-reached.mp3";

		this.amount = 0;
	}

	draw(obj) {
		canvas.ctx.fillText(this.amount, canvas.cvs.width - 60, 40);

		if (this.amount % 100 == 0 && this.amount > 0) {
			this.sound.play();
			// obj.speed += 1 / 6;
		}

		obj.distance += 1 * obj.speed;
		if (Math.floor(obj.distance) % 10 == 0) {
			this.amount++;
		}
	}
}

export default new Score();
