const img = document.querySelector("img");
const imgSize = img.getBoundingClientRect();
const c = document.getElementById("canvas");
c.width = imgSize.width;
c.height = imgSize.height;
const ctx = c.getContext("2d");
ctx.drawImage(img, 0, 0);
