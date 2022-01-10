
const images = ['배경화면 1.jpg', '배경화면 2.jpg', '배경화면 3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);