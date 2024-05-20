import { gsap } from "gsap";

function imagePixelate(container, index) {
	const img = container.querySelector("img");
	const imgSize = img.getBoundingClientRect();
	const c = container.querySelector("canvas");
	c.width = imgSize.width;
	c.height = imgSize.height;
	const ctx = c.getContext("2d");
	const blockVal = container.dataset.blocks;
	let animationFrame;
	ctx.imageSmoothingEnabled = false;
	ctx.webkitImageSmoothingEnabled = false;
	ctx.mozImageSmoothingEnabled = false;

	const blocks = {
		amount: blockVal,
	};

	function pixalte() {
		animationFrame = requestAnimationFrame(pixalte);
		const size = blocks.amount * 0.01;

		const w = c.width * size;
		const h = c.height * size;
		ctx.drawImage(img, 0, 0, w, h);

		ctx.drawImage(c, 0, 0, w, h, 0, 0, c.width, c.height);
		console.log("runing");
	}

	pixalte();

	gsap.to(blocks, {
		amount: 100,
		ease: "steps(100)",
		duration: 3,
		delay: 0.3 * index,
		onComplete: () => {
			cancelAnimationFrame(animationFrame);
		},
	});
}

document
	.querySelectorAll(".container")
	.forEach((item, index) => imagePixelate(item, index));
