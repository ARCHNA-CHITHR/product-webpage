const images = [

  "assets/image1.jpg",

  "assets/image2.jpg",

  "assets/image3.jpg"

];

const featuredImage =
  document.getElementById("featured-image");

const leftArrow =
  document.querySelector(".left-arrow");

const rightArrow =
  document.querySelector(".right-arrow");

const thumbnails =
  document.querySelectorAll(".thumb");



let currentIndex = 0;


function updateImage() {

  featuredImage.src = images[currentIndex];

}

rightArrow.addEventListener("click", () => {

  currentIndex++;

  if (currentIndex >= images.length) {

    currentIndex = 0;

  }

  updateImage();

});


leftArrow.addEventListener("click", () => {

  currentIndex--;

  if (currentIndex < 0) {

    currentIndex = images.length - 1;

  }

  updateImage();

});


thumbnails.forEach((thumb, index) => {

  thumb.addEventListener("click", () => {

    currentIndex = index;

    updateImage();

  });

});


const menuToggle =
  document.querySelector(".menu-toggle");

const navLinks =
  document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});
