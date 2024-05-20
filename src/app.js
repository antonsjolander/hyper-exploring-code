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

const waveFolder = gui.addFolder("wave");
waveFolder.add(wave, "y", 0, window.innerHeight);
waveFolder.add(wave, "length", -0.01, 0.01);
waveFolder.add(wave, "amplitude", -300, 300);
waveFolder.add(wave, "frequency", -0.01, 1);

waveFolder.open();

// Set up dimensions
c.width = window.innerWidth;
c.height = window.innerHeight;

let increment = wave.frequency;
function animate() {
	requestAnimationFrame(animate);
	// CLEAR FRAME
	ctx.fillStyle = "rgba(130, 0, 100, 1)";
	ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
	// ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

	ctx.beginPath();

	ctx.moveTo(0, wave.y);

	for (let i = 0; i < window.innerWidth; i++) {
		ctx.lineTo(
			i,
			wave.y + Math.sin(i * wave.length + increment) * wave.amplitude
		);
	}
	increment += wave.frequency;
	ctx.stroke();
}

animate();
