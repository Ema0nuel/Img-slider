const nextBtn = document.getElementById("btn-next");
const auto = document.getElementById("auto");
const imgContainer = document.querySelector(".img-card p");
const image = document.img;

var time = 2000;
var start = 0;
var images = [
  "../img/brown.jpg",
  "../img/bulb_black.jpg",
  "../img/bulb.png",
  "../img/cup.jpg",
  "../img/laptop.jpg",
  "../img/television.jpg",
  "../img/img (1).jpg",
  "../img/img (2).jpg",
  "../img/img (3).jpg",
  "../img/img (4).jpg",
  "../img/img (5).jpg",
  "../img/img (6).jpg",
  "../img/img (7).jpg",
  "../img/img (8).jpg",
  "../img/img (9).jpg",
  "../img/img (10).jpg",
  "../img/img (11).jpg",
  "../img/img (12).jpg",
  "../img/img (13).jpg",
  "../img/img (14).jpg",
  "../img/img (15).jpg",
  "../img/img (16).jpg",
  "../img/img (17).jpg",
  "../img/img (18).jpg",
  "../img/img (19).jpg",
  "../img/img (20).jpg",
  "../img/img (21).jpg",
  "../img/img (22).jpg",
  "../img/img (23).jpg",
];

const changeImage = () => {
  image.src = images[start];
  if (start < images.length - 1) {
    start++;
    imgContainer.style.display = "none";
  } else {
    start = 0;
  }
};

const autoSlide = () => {
  image.src = images[start];
  if (start < images.length - 1) {
    start++;
  } else {
    start = 0;
  }
  setTimeout("autoSlide()", time);
};

nextBtn.addEventListener("click", changeImage);

auto.addEventListener("click", () => {
  nextBtn.style.cursor = "not-allowed";
  auto.style.cursor = "not-allowed";
  nextBtn.disabled = true;
  auto.disabled = true;
  imgContainer.style.display = "none";

  autoSlide();
});
