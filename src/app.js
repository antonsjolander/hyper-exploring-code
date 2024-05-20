import * as dat from "dat.gui";

const gui = new dat.GUI();

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

const wave = {
	y: window.innerHeight / 2,
	length: 0.01,
	amplitude: 100,
	frequency: 0.01,
};

const bgColor = {
	r: 0,
	g: 0,
	b: 0,
	a: 0.01,
};

const strokeColor = {
	h: 255,
	s: 55,
	l: 255,
};

const waveFolder = gui.addFolder("wave");
waveFolder.add(wave, "y", 0, window.innerHeight);
waveFolder.add(wave, "length", -0.01, 0.01);
waveFolder.add(wave, "amplitude", -300, 300);
waveFolder.add(wave, "frequency", -0.01, 1);

waveFolder.open();

const bgFolder = gui.addFolder("background color");
bgFolder.add(bgColor, "r", 0, 255);
bgFolder.add(bgColor, "g", 0, 255);
bgFolder.add(bgColor, "b", 0, 255);
bgFolder.add(bgColor, "a", 0, 1);

bgFolder.open();

const strokeFolder = gui.addFolder("stroke color");
strokeFolder.add(strokeColor, "h", 0, 255);
strokeFolder.add(strokeColor, "s", 0, 100);
strokeFolder.add(strokeColor, "l", 0, 100);

strokeFolder.open();

// Set up dimensions
c.width = window.innerWidth;
c.height = window.innerHeight;

let increment = wave.frequency;
function animate() {
	requestAnimationFrame(animate);
	// CLEAR FRAME
	ctx.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`;
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	// ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

	ctx.beginPath();

	ctx.moveTo(0, wave.y);

	for (let i = 0; i < window.innerWidth; i++) {
		ctx.lineTo(
			i,
			wave.y +
				Math.sin(i * wave.length + increment) *
					wave.amplitude *
					Math.sin(increment)
		);
	}
	increment += wave.frequency;
	ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))}, ${
		strokeColor.s
	}%, ${strokeColor.l}%)`;
	ctx.stroke();

	console.log();
}

animate();
