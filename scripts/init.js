import drawGame from "./modules/drawGame.js";
import canvas from "./modules/Canvas.js";
import ptero from "./modules/objects/instances/Ptero.js";

function init() {
	canvas.draw();
	drawGame();
}

ptero.img.onload = init;
