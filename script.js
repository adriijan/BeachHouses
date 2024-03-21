const images = document.querySelectorAll('.image');
let currentIndex = 0;

function showNextImage() {
	const currentImage = images[currentIndex];
	const nextIndex = (currentIndex + 1) % images.length;
	const nextImage = images[nextIndex];

	currentImage.style.opacity = '1';
	nextImage.style.opacity = '1';

	setTimeout(() => {
		currentImage.style.opacity = '0';
		setTimeout(() => {
			currentImage.style.zIndex = '-1';
			nextImage.style.zIndex = '1';
			currentIndex = nextIndex;
		}, 1000); // Wait for fade out before changing z-index
	}, 1000); // Wait for fade in before fading out current image
}

setInterval(showNextImage, 2000); // Start the loop

window.addEventListener('load', function() {
	resizeImageContainer();
  });
  
  window.addEventListener('resize', function() {
	resizeImageContainer();
  });
  
  function resizeImageContainer() {
	var imageContainer = document.getElementById('imageContainer');
	var images = imageContainer.querySelectorAll('.image');
  
	var maxHeight = 0;
	images.forEach(function(image) {
	  maxHeight = Math.max(maxHeight, image.offsetHeight);
	});
  
	imageContainer.style.height = maxHeight + 'px';
  }
  