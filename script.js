/* INDEX - changing photos*/

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

window.addEventListener('load', function () {
	resizeImageContainer();
});

window.addEventListener('resize', function () {
	resizeImageContainer();
});

function resizeImageContainer() {
	var imageContainer = document.getElementById('imageContainer');
	var images = imageContainer.querySelectorAll('.image');

	var maxHeight = 0;
	images.forEach(function (image) {
		maxHeight = Math.max(maxHeight, image.offsetHeight);
	});

	imageContainer.style.height = maxHeight + 'px';
}

/* HAMBURGER MENU*/

document.addEventListener('DOMContentLoaded', function () {
	const iconBars = document.querySelector("#menu-icon__bars");
	const iconCross = document.querySelector("#menu-icon__cross");
	const menu = document.querySelector(".menu");
	const body = document.querySelector("body");
	const header = document.querySelector("header");
	const imageContainer = document.getElementById("imageContainer");



	function showSidePanel() {
		menu.classList.remove('menu');
		menu.classList.add('sidePanel');
		iconBars.classList.remove('menu-icon__bars');
		iconCross.classList.add('menu-icon__cross');
		body.classList.add('show-overlay');
		header.style.backgroundColor = "unset";
		imageContainer.style.zIndex = '0';
	}


	function hideSidePanel() {
		menu.classList.remove('sidePanel');
		menu.classList.add('menu');
		iconBars.classList.add('menu-icon__bars');
		iconCross.classList.remove('menu-icon__cross');
		body.classList.remove('show-overlay');
		header.style.backgroundColor = "white";
		imageContainer.style.zIndex = '1';
	}


	iconBars.addEventListener('click', function () {
		showSidePanel();

	});


	iconCross.addEventListener('click', function () {
		hideSidePanel();
	});

});