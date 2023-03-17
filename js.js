let slideAtual = 0;
const slides = document.querySelectorAll('.slider-section img');

const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const video = document.querySelector('.video');

function mudarSlide(n) {
	slideAtual += n;
	if (slideAtual > slides.length - 1) {
		slideAtual = 0;
	}
	if (slideAtual < 0) {
		slideAtual = slides.length - 1;
	}
	slider1.scrollTo({
		left: slideAtual * slides[0].offsetWidth,
		behavior: 'smooth'
	});

	slider2.scrollTo({
		left: slideAtual * slides[0].offsetWidth,
		behavior: 'smooth'
	});
}

setInterval(() => mudarSlide(1), 5000);

const popup = document.querySelector('.popup');
const bgPopup = document.querySelector('.bgPopup');
const closeButton = popup.querySelector('.close-button');

closeButton.addEventListener('click', () => {
  popup.style.opacity = 0;
  bgPopup.style.opacity = 0;
  popup.style.display = 'none';
  bgPopup.style.display = 'none';
  video.play()
});





const container = document.getElementById("neve");

function createSnowflake() {
  const flake = document.createElement("div");
  flake.classList.add("flake");
  flake.innerHTML = "<img src='Cannabis.png' />";
  flake.style.left = Math.random() * 100 + "%";
  flake.style.animationDuration = Math.random() * 3 + 3 + "s";
  container.appendChild(flake);
  setTimeout(() => {
    flake.remove();
  }, 10000);
}

setInterval(createSnowflake, 200);
