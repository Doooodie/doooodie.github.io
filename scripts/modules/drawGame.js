import canvas from "./Canvas.js";
import objects from "./objects/Objects.js";

export default function drawGame() {
	canvas.ctx.clearRect(0, 0, canvas.cvs.width, canvas.cvs.height);
	canvas.transform();
	objects.draw(canvas.ctx);
	requestAnimationFrame(drawGame);
}
