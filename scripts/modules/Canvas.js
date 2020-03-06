class Canvas {
	constructor() {
		this.cvs = document.createElement("canvas");
		this.cvs.innerText = "Ваш браузер не поддерживается.";
		this.cvs.width = 600;
		this.cvs.height = 150;
		this.ctx = this.cvs.getContext("2d");
	}

	draw() {
		document.body.prepend(this.cvs);
	}

	transform() {
		const windowHeight = window.innerHeight;
		let scaleHeight = windowHeight / this.cvs.height;
		let scaleWidth = window.innerWidth / this.cvs.width;
		let scale = Math.max(1, Math.min(scaleHeight, scaleWidth));
		let scaledCanvasHeight = this.cvs.height * scale;
		let translateY = Math.ceil(Math.max(0, (windowHeight - scaledCanvasHeight - 35) * 0.1)) * window.devicePixelRatio;
		this.cvs.style.transform = 'scale(' + scale + ') translateY(' + translateY + 'px)';
	}
}

export default new Canvas();