const c = document.getElementById("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
const ctx = c.getContext("2d");

// Draw line
// ctx.moveTo(0, 0);
// ctx.lineTo(window.innerWidth, window.innerHeight);
// ctx.stroke();

// Draw
// ctx.beginPath();
// ctx.rect(window.innerWidth / 2 - 100, window.innerHeight / 2 - 100, 200, 200);
// ctx.strokeStyle = "green";
// ctx.lineWidth = 10;
// ctx.stroke();
// ctx.fillStyle = "red";
// ctx.fill();

// TEXT
// ctx.font = "50px Arial";
// ctx.textAlign = "center";
// ctx.fillText("Hello World", window.innerWidth / 2, window.innerHeight / 2);

// Image Rendering
const img = document.querySelector("img");
ctx.drawImage(img, 10, 50);
