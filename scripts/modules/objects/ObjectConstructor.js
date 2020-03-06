class ObjectConstructor {
	constructor(sx, sy, width, height, dx, dy) {
		this.img = document.createElement("img");
		this.img.src = "./assets/images/sprite.png";
		this.sx = sx;
		this.sy = sy;
		this.width = width;
		this.height = height;
		this.dx = dx;
		this.dy = dy;
		this.dWidth = width;
		this.dHeight = height;
	}

	draw = ctx =>
		ctx.drawImage(
			this.img,
			this.sx,
			this.sy,
			this.width,
			this.height,
			this.dx,
			this.dy,
			this.dWidth,
			this.dHeight
		);
}

class Ptero extends ObjectConstructor {
	constructor(sx, sy, width, height, dx, dy) {
		super(sx, sy, width, height, dx, dy);
		this.flySound = new Audio();
		this.flySound.src = "./assets/sounds/button-press.mp3";
		this.deadSound = new Audio();
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

	fly() {
		this.flySound.play();
		if (this.dy === 50) {
			this.dy += 50;
		} else {
			this.dy -= 50;
		}
	}

	isCrashed(obj) {
		if (this.dx == obj.dx && this.dy == obj.dy) {
			return true;
        } else {
			return false;
		}
	}
}

class Score {
	constructor(cvs, ctx) {
		this.cvs = cvs;
		this.ctx = ctx;
		this.amount = 0;
		this.ctx.font = "14px 'Press Start 2P'";
		this.sound = new Audio();
		this.sound.src = "./assets/sounds/score-reached.mp3";
	}

	draw() {
		this.ctx.fillText(this.amount, this.cvs.width - 50, 40);
	}
}

const ptero = new Ptero(130, 1, 46, 30, 50, 100);
const aliveDino = new ObjectConstructor(1176, 1, 44, 47, 400, 100);
const deadDino = new ObjectConstructor(1000, 1, 44, 47, 400, 100);
const smallCactus = new ObjectConstructor(1176, 1, 44, 47, 400, 100);
const bigCactus = new ObjectConstructor(1176, 1, 44, 47, 400, 100);
const cloud = new ObjectConstructor(83, 1, 46, 13, 500, 20);
const sun = new ObjectConstructor(537, 1, 40, 40, 400, 5);
const foreground = new ObjectConstructor(1, 52, 1200, 12, 0, 135);

export {
	ObjectConstructor,
	Score,
	ptero,
	aliveDino,
	deadDino,
	smallCactus,
	bigCactus,
	cloud,
	sun,
	foreground
};
