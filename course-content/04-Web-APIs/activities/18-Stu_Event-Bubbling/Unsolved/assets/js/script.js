// TODO: Which element is the following line of code selecting?
//carousel is selecting the HTML div "carouselbox"
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// each variable is selecting a separate button, next and prev
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }// this will help prevent the navigator always stating with in the images provided.
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// the eventlistener is looking for a click, and will move the user through
// the images.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//  This event listener looks for a click to move forward in directiong
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // This will contain image in its element
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// This responds to the previous button when clicked and takes us one inmage back.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
// When you click next or previous the image will take over all of its parent elements.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
