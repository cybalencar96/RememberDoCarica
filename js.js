let slideAtual = 0;

const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const video = document.querySelector('.video');

var imagens = [
	"cub0",
	"cub1",
	"cub2",
	"cub3",
	"cub4",
	"cub5",
	"cub6",
	"cub7",
	"cub8",
	"cub9",
	"cub10",
	"cub11",
	"cub12",
	"cub13",
	"cub14",
	"cub15",
	"cub16",
	"cub17",
	"cub18",
	"cub19",
	"cub20",
	"cub21",
	"cub22",
	"cub23",
	"cub24",
	"cub25",
];

var divSlider1 = document.querySelector(".slider1");
var divSlider2 = document.querySelector(".slider2");
var slides1 = []
var slides2 = []

for (var i = 0; i < imagens.length; i+=2) {
	slides1.push(imagens[i])
	var imagem = "<img src='./imgs/" + imagens[i] + ".jpeg' />";
	divSlider1.innerHTML += imagem;
}
for (var i = 1; i < imagens.length; i+=2) {
	slides2.push(imagens[i])
	var imagem = "<img src='./imgs/" + imagens[i] + ".jpeg' />";
	divSlider2.innerHTML += imagem;
}

const imgs = document.querySelectorAll('.slider-section img');

function mudarSlide1(n) {
	slideAtual += n;
	if (slideAtual > slides1.length - 1) {
		slideAtual = 0;
	}
	if (slideAtual < 0) {
		slideAtual = slides1.length - 1;
	}

	

	slider1.scrollTo({
		left: slideAtual * imgs[0].offsetWidth,
		behavior: 'smooth'
	});
}

function mudarSlide2(n) {
	slideAtual += n;
	if (slideAtual > slides2.length - 1) {
		slideAtual = 0;
	}
	if (slideAtual < 0) {
		slideAtual = slides2.length - 1;
	}
	slider2.scrollTo({
		left: slideAtual * imgs[0].offsetWidth,
		behavior: 'smooth'
	});
}

console.log(slides1[0].offsetWidth)
setInterval(() => mudarSlide1(1), 5000);
setInterval(() => mudarSlide2(1), 5000);

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


