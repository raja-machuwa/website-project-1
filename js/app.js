var Slide = document.getElementById('Slide');
var BackBtn = document.getElementById('BackBtn');
var NextBtn = document.getElementById('NextBtn');

var slideimages = [
  './images/pic-1.jpg',
  './images/pic-2.jpg',
  './images/pic-3.jpg',
  './images/pic-4.jpg',
];

let i = 0;

NextBtn.onclick = function () {
  if (i < 3) {
    Slide.src = slideimages[i + 1];
    i++;
  }
};

BackBtn.onclick = function () {
  if (i > 0) {
    Slide.src = slideimages[i - 1];
    i--;
  }
};
