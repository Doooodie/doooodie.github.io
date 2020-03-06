import drawGame from "./modules/drawGame.js";
import canvas from "./modules/Canvas.js";
import { ptero } from "./modules/objects/ObjectConstructor.js";

document.addEventListener("keydown", () => ptero.fly());

function init() {
	canvas.draw();
	drawGame();
	setInterval(() => ptero.flitter(), 200);
}

ptero.img.onload = init;
